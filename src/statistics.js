const axios = require('axios');

const apiKey = 'SvMhtTsmQ239NmpwWjnnLWXtag5Jt8wYp7NF8F3Tear1QSaDRl9gnM34JZVXdLFV';
const apiConfig = {
    headers: {
        'x-api-key': apiKey
    }
}
const serverUrl = 'https://deep-index.moralis.io/api/v2';

const { tokenAddress, chain } = require('../public/constant');
const { getLastLog, getLogsByFilter, AddLogs } = require('../database/statistics');

let isFetchingLogs = false;

const fetchLogs = async function(interval) {
    setInterval(() => {
        _fetchLogs();
    }, interval);
}

const _fetchLogs = () => {
    if (isFetchingLogs) return;
    isFetchingLogs = true;
    getLastLog((log) => {
        const lastLog = log[0];
        let lastBlock = 0;
        if (lastLog) lastBlock = Number(lastLog.block_number);
        // console.log(lastBlock);
        let offset = 0;
        try {
            axios.get(`${serverUrl}/${tokenAddress}/logs?chain=${chain}&from_block=${lastBlock+1}&topic0=0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef&oder=asc`, apiConfig).then(async (response) => {
                let logs = response.data.result;
                const total = response.data.total;
                const pages = Math.ceil(total / 500);
                let page = 1;
                while (page < pages) {
                    offset = page * 500;
                    const response = await axios.get(`${serverUrl}/${tokenAddress}/logs?chain=${chain}&from_block=${lastBlock+1}&topic0=0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef&offset=${offset}&oder=asc`, apiConfig);
                    // console.log(response.data.result.length);
                    logs = logs.concat(response.data.result);
                    page++;
                }
                AddLogs(logs, () => {
                    isFetchingLogs = false;
                });
            })
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

async function calculateBuySell(logs, _chain, _tokenAddress, _walletAddress) {
    let buy = 0, sell = 0, isFee = true;
    if (await isExcludedFromFee(_chain, _tokenAddress, _walletAddress)) isFee = false;
    logs.map(each => {
        if (getAddress(each.topic1) === _walletAddress.toLowerCase()) {
            if (isFee) {
                sell += getValue(each.data) / 97 * 100;
            } else {
                sell += getValue(each.data);
            }
        } else buy += getValue(each.data);
    })
    let result = {buy: buy, sell: sell};
    return result;
}

function getTopicFromAddress(topic) {
    if (topic === null || topic === '') return '';
    return `0x${topic.substring(topic.length - 40)}`;
}

const isExcludedFromFee = async function (_chain, _tokenAddress, _walletAddress) {
    const isExcludedFromFeeAbi = [{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}];
    return await runContractFunction(_chain, _tokenAddress, 'isExcludedFromFee', isExcludedFromFeeAbi, {account:_walletAddress});
}

const runContractFunction = async function (_chain, _contractAddress, _functionName, _abi, _params) {
    let result;
    try {
        result = await axios.post(`${serverUrl}/${_contractAddress}/function?chain=${_chain}&function_name=${_functionName}`, {
            "abi": _abi,
            "params": _params
        }, apiConfig);
    } catch (e) {
        result = null;
    }
    return result ? result.data : result;
}

function getValue(topic) {
    return parseInt(topic, 16);
}

module.exports = {
    fetchLogs,
    filterLogs
}