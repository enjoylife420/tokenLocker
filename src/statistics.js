const axios = require('axios');
const Web3 = require('web3');
const { Multicall } = require('ethereum-multicall');
const { tokenAddress, chain, tokenCreator, provider } = require('../public/constant');
const { getLastLog, getLogsByFilter, addLogs, getAllLogs } = require('../database/statistics');
const { balanceOfAbi } = require('../public/abi/erc20_abi');

const web3 = new Web3(provider);
const multicall = new Multicall({ web3Instance: web3, tryAggregate: true });

const apiKey = 'SvMhtTsmQ239NmpwWjnnLWXtag5Jt8wYp7NF8F3Tear1QSaDRl9gnM34JZVXdLFV';
const apiConfig = {
    headers: {
        'x-api-key': apiKey
    }
}
const serverUrl = 'https://deep-index.moralis.io/api/v2';

let isFetchingLogs = false;
let isFetchingHolders = false;
let pendingLogs = [];
let holders = [tokenCreator.toLowerCase()];
let holdersDetail = [];

const fetchLogs = async function(interval) {
    setInterval(() => {
        _fetchLogs();
    }, interval);
}

const _fetchLogs = () => {
    if (isFetchingLogs) return;
    isFetchingLogs = true;
    getLastLog(async (log) => {
        const lastLog = log[0];
        let lastBlock = 0;
        if (lastLog) lastBlock = Number(lastLog.block_number);
        // console.log(lastBlock);
        let offset = 0;
        try {
            let response = await axios.get(`${serverUrl}/${tokenAddress}/logs?chain=${chain}&from_block=${lastBlock+1}&topic0=0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef`, apiConfig);
            let logs = response.data.result;
            const total = response.data.total;
            const pages = Math.ceil(total / 500);
            let page = 1;
            while (page < pages) {
                offset = page * 500;
                response = await axios.get(`${serverUrl}/${tokenAddress}/logs?chain=${chain}&from_block=${lastBlock+1}&topic0=0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef&offset=${offset}`, apiConfig);
                // console.log(response.data.result.length);
                logs = logs.concat(response.data.result);
                page++;
            }
            addLogs(logs, () => {
                isFetchingLogs = false;
            });
            _getNewHolders(logs);

        } catch (e) {
            isFetchingLogs = false;
        }
    })
}

function filterLogs (_walletAddress, cb) {
    getLogsByFilter(_walletAddress, (logs) => {
        cb(logs);
    })
    // return logs.filter(each => getAddress(each.topic1) === _walletAddress.toLowerCase() || getAddress(each.topic2) === _walletAddress.toLowerCase());
}

const _getNewHolders = (logs) => {
    if (isFetchingHolders) {
        pendingLogs.concat(logs);
        return;
    } else {
        logs = logs.concat(pendingLogs);
        pendingLogs = [];
        logs.map(log => {
            if (holders.indexOf(topicToAddress(log.topic2)) === -1 && BigInt(log.data).toString() !== '0') holders.push(topicToAddress(log.topic2));
        })
        fetchHolders();
    }
}

const topicToAddress = (topic) => {
    return `0x${topic.slice(26).toLowerCase()}`;
}

const fetchHolders = async () => {
    isFetchingHolders = true;
    contractCallContext = {
        reference: "balance",
        contractAddress: tokenAddress,
        abi: balanceOfAbi,
        calls: holders.map(each => {
            return { reference: 'balanceOfCall', methodName: 'balanceOf', methodParameters: [each] }
        })
    }
    try {
        response = await multicall.call(contractCallContext);
    } catch (e) {
        return [];
    }
    holdersDetail = holders.map((each, index) => {
        return { address: each, amount: BigInt(response.results.balance.callsReturnContext[index].returnValues[0].hex).toString() }
    })
    let i = 0;
    while (i < holdersDetail.length) {
        if (holdersDetail[i].amount === '0') {
            holdersDetail.splice(i,1);
            holders.splice(i,1);
        } else i++;
    }
    isFetchingHolders = false;
}

const initiateHolders = () => {
    getAllLogs((data) => {
        _getNewHolders(data);
    })
}

const getHolderDetailByWallet = (wallet, cb) => {
    const sortedHoldersDetail = holdersDetail.sort((a,b) => {
        return b.amount - a.amount;
    });
    let index = sortedHoldersDetail.findIndex((each) => each.address === wallet.toLowerCase());
    if (!sortedHoldersDetail.length) cb(-1);
    else if (index !== -1) cb({ total: sortedHoldersDetail.length, ranking: index + 1 });
    else cb({ total: sortedHoldersDetail.length, ranking: sortedHoldersDetail.length + 1});
}

const getHoldersDetail = (cb) => {
    cb(holdersDetail.sort((a,b) => b.amount - a.amount));
}

module.exports = {
    fetchLogs,
    filterLogs,
    initiateHolders,
    getHolderDetailByWallet,
    getHoldersDetail
}