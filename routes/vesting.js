const express = require("express");

const router = express.Router();

const { getLastDeployedContract, getClaimTokenList } = require('../src/vesting');

router.get('/lastDeployed/:wallet', (req, res) => {
    const wallet = req.params.wallet;
    getLastDeployedContract(wallet, (data) => {
        res.send(data);
    })
})

module.exports = router;