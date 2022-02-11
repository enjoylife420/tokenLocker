const express = require("express");

const router = express.Router();

const { getWalletLockedTokens } = require('../src/locker');

router.get('/lockedtokens/:wallet', (req, res) => {
    const wallet = req.params.wallet;
    getWalletLockedTokens(wallet, (data) => {
        res.send(data);
    })
})

module.exports = router;