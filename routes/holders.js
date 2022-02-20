const express = require("express");

const router = express.Router();

const { getHolderDetailByWallet, getHoldersDetail } = require('../src/statistics');

router.get('/:wallet', (req, res) => {
    const wallet = req.params.wallet;
    getHolderDetailByWallet(wallet, (data) => {
        res.send(data);
    });
})
router.get('/', (req, res) => {
    getHoldersDetail((data) => {
        res.send(data);
    })
})

module.exports = router;