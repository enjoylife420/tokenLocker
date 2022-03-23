const Datastore = require('nedb');

const locker = new Datastore({ filename: './datastore/locker.db', autoload: true });
const depositEvents = new Datastore({filename: './datastore/deposit_events.db', autoload: true});
const withdrawEvents = new Datastore({filename: './datastore/withdraw_events.db', autoload: true});
const locker_test = new Datastore({ filename: './datastore/locker_test.db', autoload: true });
const depositEvents_test = new Datastore({filename: './datastore/deposit_events_test.db', autoload: true});
const withdrawEvents_test = new Datastore({filename: './datastore/withdraw_events_test.db', autoload: true});
const eth_locker = new Datastore({ filename: './datastore/eth_locker.db', autoload: true });
const eth_depositEvents = new Datastore({filename: './datastore/eth_deposit_events.db', autoload: true});
const eth_withdrawEvents = new Datastore({filename: './datastore/eth_withdraw_events.db', autoload: true});
const bsc_locker = new Datastore({ filename: './datastore/bsc_locker.db', autoload: true });
const bsc_depositEvents = new Datastore({filename: './datastore/bsc_deposit_events.db', autoload: true});
const bsc_withdrawEvents = new Datastore({filename: './datastore/bsc_withdraw_events.db', autoload: true});

// locker
const userLockedTokens = (network, wallet, cb) => {
    if (network === "Ethereum") {
        eth_locker.find({ owner: wallet.toLowerCase() }).sort({ id: 1 }).exec((err, data) => {
            if (err) cb([]);
            else cb(data);
        })
    } else if (network === "Binance Smart Chain") {
        bsc_locker.find({ owner: wallet.toLowerCase() }).sort({ id: 1 }).exec((err, data) => {
            if (err) cb([]);
            else cb(data);
        })
    } else if (network === "Avalanche_testnet") {
        locker_test.find({ owner: wallet.toLowerCase() }).sort({ id: 1 }).exec((err, data) => {
            if (err) cb([]);
            else cb(data);
        })
    } else {
        locker.find({ owner: wallet.toLowerCase() }).sort({ id: 1 }).exec((err, data) => {
            if (err) cb([]);
            else cb(data);
        })
    }
}

const countLockedToken = (network, cb) => {
    if (network === "Ethereum") {
        eth_locker.find({}).sort({ id: -1 }).limit(1).exec((err, data) => {
            if (err) cb(-1);
            else if (data.length) cb(data[0].id);
            else cb(-1);
        })
    } else if (network === "Binance Smart Chain") {
        bsc_locker.find({}).sort({ id: -1 }).limit(1).exec((err, data) => {
            if (err) cb(-1);
            else if (data.length) cb(data[0].id);
            else cb(-1);
        })
    } else if (network === "Avalanche_testnet") {
        locker_test.find({}).sort({ id: -1 }).limit(1).exec((err, data) => {
            if (err) cb(-1);
            else if (data.length) cb(data[0].id);
            else cb(-1);
        })
    } else {
        locker.find({}).sort({ id: -1 }).limit(1).exec((err, data) => {
            if (err) cb(-1);
            else if (data.length) cb(data[0].id);
            else cb(-1);
        })
    }
}

const updateLockedToken = (network, newLockedTokens) => {
    if (network === "Ethereum") {
        eth_locker.insert(newLockedTokens);
    } else if (network === "Binance Smart Chain") {
        bsc_locker.insert(newLockedTokens);
    } else if (network === "Avalanche_testnet") {
        locker_test.insert(newLockedTokens);
    } else {
        locker.insert(newLockedTokens);
    }
}

// depositEvents
const userDepositEvents = (network, wallet, cb) => {
    if (network === "Ethereum") {
        bsc_depositEvents.find({ SentToAddress: wallet.toLowerCase() }).sort({ index: 1 }).exec((err, data) => {
            if (err) cb([]);
            else cb(data);
        })
    } else if (network === "Binance Smart Chain") {
        bsc_depositEvents.find({ SentToAddress: wallet.toLowerCase() }).sort({ index: 1 }).exec((err, data) => {
            if (err) cb([]);
            else cb(data);
        })
    } else if (network === "Avalanche_testnet") {
       depositEvents_test.find({ SentToAddress: wallet.toLowerCase() }).sort({ index: 1 }).exec((err, data) => {
            if (err) cb([]);
            else cb(data);
        })
    } else {
        depositEvents.find({ SentToAddress: wallet.toLowerCase() }).sort({ index: 1 }).exec((err, data) => {
            if (err) cb([]);
            else cb(data);
        })
    }
}

const lastBlockDepositEvents = (network, cb) => {
    if (network === "Ethereum") {
        eth_depositEvents.find({}).sort({ blockNumber: -1 }).limit(1).exec((err, event) => {
            if (event.length) cb(event[0].blockNumber);
            else cb(0);
        })
    } else if (network === "Binance Smart Chain") {
        bsc_depositEvents.find({}).sort({ blockNumber: -1 }).limit(1).exec((err, event) => {
            if (event.length) cb(event[0].blockNumber);
            else cb(0);
        })
    } else if (network === "Avalanche_testnet") {
        depositEvents_test.find({}).sort({ blockNumber: -1 }).limit(1).exec((err, event) => {
            if (event.length) cb(event[0].blockNumber);
            else cb(0);
        })
    } else {
        depositEvents.find({}).sort({ blockNumber: -1 }).limit(1).exec((err, event) => {
            if (event.length) cb(event[0].blockNumber);
            else cb(0);
        })
    }
}

const updateDepositEvents = (network, newDepositEvents) => {
    if (network === "Ethereum") {
        eth_depositEvents.insert(newDepositEvents.map(each => {
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
    } else if (network === "Binance Smart Chain") {
        bsc_depositEvents.insert(newDepositEvents.map(each => {
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
    } else if (network === "Avalanche_testnet") {
        depositEvents_test.insert(newDepositEvents.map(each => {
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
    } else {
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
}

// withdrawEvents
const userWithdrawEvents = (network, wallet, cb) => {
    if (network === "Ethereum") {
        eth_withdrawEvents.find({ SentToAddress: wallet.toLowerCase() }).sort({ index: 1 }).exec((err, data) => {
            if (err) cb([]);
            else cb(data);
        })
    } else if (network === "Binance Smart Chain") {
        eth_withdrawEvents.find({ SentToAddress: wallet.toLowerCase() }).sort({ index: 1 }).exec((err, data) => {
            if (err) cb([]);
            else cb(data);
        })
    } else if (network === "Avalanche_testnet") {
        withdrawEvents_test.find({ SentToAddress: wallet.toLowerCase() }).sort({ index: 1 }).exec((err, data) => {
            if (err) cb([]);
            else cb(data);
        })
    } else {
        withdrawEvents.find({ SentToAddress: wallet.toLowerCase() }).sort({ index: 1 }).exec((err, data) => {
            if (err) cb([]);
            else cb(data);
        })
    }
}

const lastBlockWithdrawEvents = (network, cb) => {
    if (network === "Ethereum") {
        eth_withdrawEvents.find({}).sort({ blockNumber: -1 }).limit(1).exec((err, event) => {
            if (event.length) cb(event[0].blockNumber);
            else cb(0);
        })
    } else if (network === "Binance Smart Chain") {
        bsc_withdrawEvents.find({}).sort({ blockNumber: -1 }).limit(1).exec((err, event) => {
            if (event.length) cb(event[0].blockNumber);
            else cb(0);
        })
    } else if (network === "Avalanche_testnet") {
        withdrawEvents_test.find({}).sort({ blockNumber: -1 }).limit(1).exec((err, event) => {
            if (event.length) cb(event[0].blockNumber);
            else cb(0);
        })
    } else {
        withdrawEvents.find({}).sort({ blockNumber: -1 }).limit(1).exec((err, event) => {
            if (event.length) cb(event[0].blockNumber);
            else cb(0);
        })
    }
}

const updateWithdrawEvents = (network, newWithdrawEvents) => {
    if (network === "Ethereum") {
        eth_withdrawEvents.insert(newWithdrawEvents.map(each => {
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
            eth_locker.update({ id: each.index }, { isWithdrawn: true }, {});
        })
    } else if (network === "Binance Smart Chain") {
        bsc_withdrawEvents.insert(newWithdrawEvents.map(each => {
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
            bsc_locker.update({ id: each.index }, { isWithdrawn: true }, {});
        })
    } else if (network === "Avalanche_testnet") {
        withdrawEvents_test.insert(newWithdrawEvents.map(each => {
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
            locker_test.update({ id: each.index }, { isWithdrawn: true }, {});
        })
    } else {
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