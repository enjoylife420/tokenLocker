const express = require("express");

const router = express.Router();

const { getWalletLockedTokens } = require('../src/locker');

router.get('/lockedtokens/:network/:wallet', (req, res) => {
    const network = req.params.network;
    const wallet = req.params.wallet;
    getWalletLockedTokens(network, wallet, (data) => {
        res.send(data);
    })
})

module.exports = router;