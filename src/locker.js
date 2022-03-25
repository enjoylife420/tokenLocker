const Web3 = require('web3');
const { Multicall } = require('ethereum-multicall');

const { getAllDepositIds_abi, lockedToken_abi, LogLocking_abi, LogWithdrawal_abi } = require('../public/abi/locker_abi');
const { token0_abi, token1_abi } = require('../public/abi/liquidityPool_abi');
const { symbolAbi, decimalsAbi, totalSupplyAbi, nameAbi } = require('../public/abi/erc20_abi');
const { lockerAddress, liquidityList, provider, wavax, weth, wbnb, networks, wavax_test } = require('../public/constant');
const { countLockedToken, updateLockedToken, userLockedTokens, lastBlockDepositEvents, updateDepositEvents, userDepositEvents, lastBlockWithdrawEvents, updateWithdrawEvents, userWithdrawEvents } = require('../database/locker');

const web3_eth = new Web3(provider[networks[0]]);
const multicall_eth = new Multicall({ web3Instance: web3_eth, tryAggregate: true });
const web3_bsc = new Web3(provider[networks[1]]);
const multicall_bsc = new Multicall({ web3Instance: web3_bsc, tryAggregate: true });
const web3_avax = new Web3(provider[networks[2]]);
const multicall_avax = new Multicall({ web3Instance: web3_avax, tryAggregate: true });
const web3_avax_test = new Web3(provider[networks[3]]);
const multicall_avax_test = new Multicall({ web3Instance: web3_avax_test, tryAggregate: true });

const getRawData = async (network, lastId) => {
    let _web3, _multicall;
    switch (network) {
        case networks[0]:
            _web3 = web3_eth;
            _multicall = multicall_eth;
            break;
        case networks[1]:
            _web3 = web3_bsc;
            _multicall = multicall_bsc;
            break;
        case networks[3]:
            _web3 = web3_avax_test;
            _multicall = multicall_avax_test;
            break;
        default:
            _web3 = web3_avax;
            _multicall = multicall_avax;
    }
    let contract = new _web3.eth.Contract(getAllDepositIds_abi, lockerAddress[network]);
    let depositIds, contractCallContext, response;
    try {
        depositIds = await contract.methods["getAllDepositIds"]().call();
    } catch (e) {
        return [];
    }
    if (lastId) depositIds = depositIds.filter(each => Number(each) > lastId);
    if (!depositIds.length) return [];
    contractCallContext = {
        reference: "lockedToken",
        contractAddress: lockerAddress[network],
        abi: lockedToken_abi,
        calls: depositIds.map(each => {
            return { reference: 'lockedTokensCall', methodName: 'lockedToken', methodParameters: [each] }
        })
    }
    try {
        response = await _multicall.call(contractCallContext);
    } catch (e) {
        return [];
    }
    return response.results.lockedToken.callsReturnContext.map(each => {
        return {
            id: each.methodParameters[0],
            token: each.returnValues[0].toLowerCase(),
            owner: each.returnValues[1].toLowerCase(),
            amount: BigInt(each.returnValues[2].hex).toString(),
            timestamp: parseInt(each.returnValues[3].hex, 16),
            isWithdrawn: each.returnValues[4]
        }
    })
}

const addDetailsToRawData = async (network, rawData) => {
    let _web3, _multicall;
    switch (network) {
        case networks[0]:
            _web3 = web3_eth;
            _multicall = multicall_eth;
            break;
        case networks[1]:
            _web3 = web3_bsc;
            _multicall = multicall_bsc;
            break;
        case networks[3]:
            _web3 = web3_avax_test;
            _multicall = multicall_avax_test;
            break;
        default:
            _web3 = web3_avax;
            _multicall = multicall_avax;
    }
    let abi, contractCallContext, response;
    abi = symbolAbi.concat(decimalsAbi).concat(totalSupplyAbi).concat(nameAbi);
    contractCallContext = rawData.map((each, index) => {
        return {
            reference: index,
            contractAddress: each.token,
            abi: abi,
            calls: [
                { reference: 'nameCall', methodName: 'name' },
                { reference: 'symbolsCall', methodName: 'symbol' },
                { reference: 'decimalsCall', methodName: 'decimals' },
                { reference: 'totalSupplyCall', methodName: 'totalSupply' }
            ]
        }
    })
    try {
        response = await _multicall.call(contractCallContext);
    } catch (e) {
        return [];
    }
    rawData.map((each, index) => {
        each.name = response.results[index].callsReturnContext[0].returnValues[0];
        each.symbol = response.results[index].callsReturnContext[1].returnValues[0];
        each.decimals = response.results[index].callsReturnContext[2].returnValues[0];
        each.totalSupply = BigInt(response.results[index].callsReturnContext[3].returnValues[0].hex).toString();
    })
    return rawData;
}

const checkIsLiquidity = async (network, detailData) => {
    let _web3, _multicall;
    switch (network) {
        case networks[0]:
            _web3 = web3_eth;
            _multicall = multicall_eth;
            break;
        case networks[1]:
            _web3 = web3_bsc;
            _multicall = multicall_bsc;
            break;
        case networks[3]:
            _web3 = web3_avax_test;
            _multicall = multicall_avax_test;
            break;
        default:
            _web3 = web3_avax;
            _multicall = multicall_avax;
    }
    let i, abi, contractCallContext, response
    for (i = 0; i < detailData.length; i++) {
        if (liquidityList.indexOf(detailData[i].symbol) !== -1) {
            detailData[i].isLiquidity = true;
            abi = token0_abi.concat(token1_abi);
            contractCallContext = {
                reference: 'tokenPair',
                contractAddress: detailData[i].token,
                abi: abi,
                calls: [
                    { reference: 'token0Call', methodName: 'token0' },
                    { reference: 'token1Call', methodName: 'token1' }
                ]
            }
            try {
                response = await _multicall.call(contractCallContext);
            } catch (e) {
                return [];
            }
            const token0 = response.results.tokenPair.callsReturnContext[0].returnValues[0];
            const token1 = response.results.tokenPair.callsReturnContext[1].returnValues[0];
            abi = symbolAbi.concat(decimalsAbi).concat(nameAbi).concat(totalSupplyAbi);
            contractCallContext = [
                {
                    reference: 0,
                    contractAddress: token0,
                    abi: abi,
                    calls: [
                        { reference: 'nameCall', methodName: 'name' },
                        { reference: 'symbolsCall', methodName: 'symbol' },
                        { reference: 'decimalsCall', methodName: 'decimals' },
                        { reference: 'totalSupplyCall', methodName: 'totalSupply' }
                    ]
                },
                {
                    reference: 1,
                    contractAddress: token1,
                    abi: abi,
                    calls: [
                        { reference: 'nameCall', methodName: 'name' },
                        { reference: 'symbolsCall', methodName: 'symbol' },
                        { reference: 'decimalsCall', methodName: 'decimals' },
                        { reference: 'totalSupplyCall', methodName: 'totalSupply' }
                    ]
                }
            ]
            try {
                response = await _multicall.call(contractCallContext);
            } catch (e) {
                return [];
            }
            detailData[i].token0 = {
                address: token0.toLowerCase(),
                name: response.results[0].callsReturnContext[0].returnValues[0],
                symbol: response.results[0].callsReturnContext[1].returnValues[0],
                decimals: response.results[0].callsReturnContext[2].returnValues[0],
                totalSupply: BigInt(response.results[0].callsReturnContext[3].returnValues[0].hex).toString()
            }
            detailData[i].token1 = {
                address: token1.toLowerCase(),
                name: response.results[1].callsReturnContext[0].returnValues[0],
                symbol: response.results[1].callsReturnContext[1].returnValues[0],
                decimals: response.results[1].callsReturnContext[2].returnValues[0],
                totalSupply: BigInt(response.results[0].callsReturnContext[3].returnValues[0].hex).toString()
            }
        } else {
            detailData[i].isLiquidity = false;
        }
    }
    return detailData;
}

const getLockedData = async (network, lastId) => {
    try {
        const rawData = await getRawData(network, lastId);
        const detailData = await addDetailsToRawData(network, rawData);
        const checkedData = await checkIsLiquidity(network, detailData);
        return checkedData;
    } catch (e) {
        return [];
    }
}

const getDepositEvents = async (network, lastBlock) => {
    let _web3, _multicall;
    switch (network) {
        case networks[0]:
            _web3 = web3_eth;
            _multicall = multicall_eth;
            break;
        case networks[1]:
            _web3 = web3_bsc;
            _multicall = multicall_bsc;
            break;
        case networks[3]:
            _web3 = web3_avax_test;
            _multicall = multicall_avax_test;
            break;
        default:
            _web3 = web3_avax;
            _multicall = multicall_avax;
    }
    let startBlock = lastBlock ? lastBlock + 1 : 0;
    let lockerContract = new _web3.eth.Contract(LogLocking_abi, lockerAddress[network]);
    // console.log(lockerContract);
    try {
        let events = await lockerContract.getPastEvents("LogLocking", {
            fromBlock: startBlock
        })
        console.log(startBlock);
        console.log("event", events);
        for (let i = 0; i < events.length; i++) {
            const block = await _web3.eth.getBlock(events[i].blockNumber);
            events[i].timestamp = block.timestamp;
        }
        return events;
    } catch (e) {
        console.log("error", e)
        return [];
    }
}

const getWithdrawEvents = async (network, lastBlock) => {
    let _web3, _multicall;
    switch (network) {
        case networks[0]:
            _web3 = web3_eth;
            _multicall = multicall_eth;
            break;
        case networks[1]:
            _web3 = web3_bsc;
            _multicall = multicall_bsc;
            break;
        case networks[3]:
            _web3 = web3_avax_test;
            _multicall = multicall_avax_test;
            break;
        default:
            _web3 = web3_avax;
            _multicall = multicall_avax;
    }
    let startBlock = lastBlock ? lastBlock + 1 : 0;
    console.log(startBlock);
    let lockerContract = new _web3.eth.Contract(LogWithdrawal_abi, lockerAddress[network]);
    try {
        let events = await lockerContract.getPastEvents("LogWithdrawal", {
            fromBlock: startBlock
        })
        for (let i = 0; i < events.length; i++) {
            const block = await web3.eth.getBlock(events[i].blockNumber);
            events[i].timestamp = block.timestamp;
        }
        return events;
    } catch (e) {
        return [];
    }
}

let isLockedInterval = [false, false, false, false], isDepositInterval = [false, false, false, false], isWithdrawInterval = [false, false, false, false];

const startLocker = async (interval) => {
    setInterval(() => {
        networks.map((each, i) => {
            if (isLockedInterval[i]) return;
            isLockedInterval[i] = true;
            countLockedToken(each, (length) => {
                getLockedData(each, length).then(results => {
                    updateLockedToken(each, results);
                    isLockedInterval[i] = false;
                });
            })
        })
        networks.map((each, i) => {
            if (isDepositInterval[i]) return;
            isDepositInterval[i] = true;
            lastBlockDepositEvents(each, (lastBlock) => {
                getDepositEvents(each, lastBlock).then(results => {
                    updateDepositEvents(each, results);
                    isDepositInterval[i] = false;
                });
            })
        })
        networks.map((each, i) => {
            if (isWithdrawInterval[i]) return;
            isWithdrawInterval[i] = true;
            lastBlockWithdrawEvents(each, (lastBlock) => {
                getWithdrawEvents(each, lastBlock).then(results => {
                    updateWithdrawEvents(each, results);
                    isWithdrawInterval[i] = false;
                });
            })
        })
    }, interval);
}

const getGroupByBaseToken = (network, lockedTokens) => {
    let _coin;
    switch (network) {
        case networks[0]:
            _coin = weth;
            break;
        case networks[1]:
            _coin = wbnb;
            break;
        case networks[3]:
            _coin = wavax_test;
            break;
        default:
            _coin = wavax;
    }
    const groupByBaseToken = [];
    lockedTokens.map(each => {
        if (each.isLiquidity) {
            const index0 = groupByBaseToken.findIndex(group => group.token.address === each.token0.address);
            const index1 = groupByBaseToken.findIndex(group => group.token.address === each.token1.address);
            if (each.token0.address !== _coin) {
                if (index0 !== -1) groupByBaseToken[index0].data.push(each);
                else groupByBaseToken.push({ token: each.token0, data: [each] });
            }
            if (each.token1.address !== _coin) {
                if (index1 !== -1) groupByBaseToken[index1].data.push(each);
                else groupByBaseToken.push({ token: each.token1, data: [each] });
            }
        } else {
            const index = groupByBaseToken.findIndex(group => group.token.address === each.token);
            if ( index !== -1) groupByBaseToken[index].data.push(each);
            else groupByBaseToken.push({ token: { address: each.token, name: each.name, symbol: each.symbol, decimals: each.decimals, totalSupply: each.totalSupply }, data: [each] });
        }
        return each;
    });
    return groupByBaseToken;
}

const addEventToLockedTokens = (lockedTokens, depositEvents, withdrawEvents) => {
    return lockedTokens.map((each) => {
        each.depositEvents = depositEvents;
        let depositIndex = depositEvents.findIndex(event => event.index === each.id);
        console.log(depositIndex);
        each.depositEvent = depositEvents[depositIndex];
        each.depositIndex = depositIndex;
        if (each.isWithdrawn) {
            let withdrawIndex = withdrawEvents.findIndex(event => event.index === each.id);
            each.withdrawEvent = withdrawEvents[withdrawIndex];
        }
        return each;
    })
}

const getWalletLockedTokens = (network, walletAddress, cb) => {
    userLockedTokens(network, walletAddress, (data) => {
        const lockedTokens = data;
        userDepositEvents(network, walletAddress, (data) => {
            const depositEvents = data;
            // cb([data]);
            userWithdrawEvents(network, walletAddress, (data) => {
                const withdrawEvents = data;
                const eventAddedLockedTokens = addEventToLockedTokens(lockedTokens, depositEvents, withdrawEvents);
                const groupByBaseToken = getGroupByBaseToken(network, eventAddedLockedTokens);
                cb(groupByBaseToken);
            })
        })
    })
}

module.exports = {
    startLocker,
    getWalletLockedTokens
}
