const express = require("express");

const router = express.Router();

const { getHolderDetailByWallet, getHoldersDetail, getHoldersDetailInAirdropFormat } = require('../src/statistics');

router.get('/', (req, res) => {
    getHoldersDetail((data) => {
        res.send(data);
    })
})
router.get('/airdrop', (req, res) => {
    getHoldersDetailInAirdropFormat((data) => {
        res.send(data);
    })
})
router.get('/:wallet', (req, res) => {
    const wallet = req.params.wallet;
    getHolderDetailByWallet(wallet, (data) => {
        res.send(data);
    });
})

module.exports = router;