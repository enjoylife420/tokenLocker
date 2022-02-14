const Datastore = require('nedb');
const logs = new Datastore({ filename: './datastore/logs.db', autoload: true });

const AddLogs = (newLogs) => {
    logs.insert(newLogs);
}
const getLastLog = (cb) => {
    logs.find().sort({ block_number: -1 }).limit(1).exec((err, data) => {
        if(err) cb(undefined);
        else cb(data);
    })
}

const getLogsByFilter = (wallet, cb) => {
    let walletLog = `0x000000000000000000000000${wallet.toLowerCase().slice(2)}`;
    logs.find({ $or: [{ topic1: walletLog }, { topic2: walletLog }] }).sort({ block_number: 1 }).exec((err, data) => {
        cb(data);
    })
}

module.exports = {
    AddLogs,
    getLastLog,
    getLogsByFilter
}