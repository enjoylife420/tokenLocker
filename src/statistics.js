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
            AddLogs(logs, () => {
                isFetchingLogs = false;
            });
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

module.exports = {
    fetchLogs,
    filterLogs
}