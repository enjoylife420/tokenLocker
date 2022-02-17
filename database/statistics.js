const Datastore = require('nedb');
const logs = new Datastore({ filename: './datastore/logs.db', autoload: true });

const addLogs = (newLogs, cb) => {
    logs.insert(newLogs, (err) => {
        cb();
    });
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

const getAllLogs = (cb) => {
    logs.find({}, (err, data) => {
        cb(data);
    })
}

module.exports = {
    addLogs,
    getLastLog,
    getLogsByFilter,
    getAllLogs
}