const Datastore = require('nedb');

const locker = new Datastore({ filename: './datastore/locker.db', autoload: true });
const depositEvents = new Datastore({filename: './datastore/depositEvents.db', autoload: true});
const withdrawEvents = new Datastore({filename: './datastore/withdrawEvents.db', autoload: true});

// locker
const userLockedTokens = (wallet, cb) => {
    locker.find({ owner: wallet.toLowerCase() }).sort({ id: 1 }).exec((err, data) => {
        if (err) cb([]);
        else cb(data);
    })
}

const countLockedToken = (cb) => {
    locker.find({}).sort({ id: -1 }).limit(1).exec((err, data) => {
        if (err) cb(-1);
        else if (data.length) cb(data[0].id);
        else cb(-1);
    })
}

const updateLockedToken = (newLockedTokens) => {
    locker.insert(newLockedTokens);
}

// depositEvents
const userDepositEvents = (wallet, cb) => {
    depositEvents.find({ SentToAddress: wallet.toLowerCase() }).sort({ index: 1 }).exec((err, data) => {
        if (err) cb([]);
        else cb(data);
    })
}

const lastBlockDepositEvents = (cb) => {
    depositEvents.find({}).sort({ blockNumber: -1 }).limit(1).exec((err, event) => {
        if (event.length) cb(event[0].blockNumber);
        else cb(0);
    })
}

const updateDepositEvents = (newDepositEvents) => {
    depositEvents.insert(newDepositEvents.map(each => {
        return {
            address: each.address.toLowerCase(),
            blockNumber: each.blockNumber,
            transactionHash: each.transactionHash,
            blockHash: each.blockHash,
            index: each.returnValues.index,
            SentToAddress: each.returnValues.SentToAddress.toLowerCase(),
            AmountLocked: each.returnValues.AmountLocked,
            timestamp: each.timestamp
        }
    }))
}

// withdrawEvents
const userWithdrawEvents = (wallet, cb) => {
    withdrawEvents.find({ SentToAddress: wallet.toLowerCase() }).sort({ index: 1 }).exec((err, data) => {
        if (err) cb([]);
        else cb(data);
    })
}

const lastBlockWithdrawEvents = (cb) => {
    withdrawEvents.find({}).sort({ blockNumber: -1 }).limit(1).exec((err, event) => {
        if (event.length) cb(event[0].blockNumber);
        else cb(0);
    })
}

const updateWithdrawEvents = (newWithdrawEvents) => {
    withdrawEvents.insert(newWithdrawEvents.map(each => {
        return {
            address: each.address.toLowerCase(),
            blockNumber: each.blockNumber,
            transactionHash: each.transactionHash,
            blockHash: each.blockHash,
            index: each.returnValues.index,
            SentToAddress: each.returnValues.SentToAddress.toLowerCase(),
            AmountTransferred: each.returnValues.AmountLocked,
            timestamp: each.timestamp
        }
    }))
    newWithdrawEvents.map(each => {
        locker.update({ id: each.index }, { isWithdrawn: true }, {});
    })
}

module.exports = {
    userLockedTokens,
    countLockedToken,
    updateLockedToken,
    userDepositEvents,
    lastBlockDepositEvents,
    updateDepositEvents,
    userWithdrawEvents,
    lastBlockWithdrawEvents,
    updateWithdrawEvents
}