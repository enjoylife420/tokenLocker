const express = require("express");

const router = express.Router();

const { getHolderDetailByWallet } = require('../src/statistics');

router.get('/:wallet', (req, res) => {
    const wallet = req.params.wallet;
    getHolderDetailByWallet(wallet, (data) => {
        res.send(data);
    })
})

module.exports = router;