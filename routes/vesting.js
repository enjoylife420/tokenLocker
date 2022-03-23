const express = require("express");

const router = express.Router();

const { getLastDeployedContract, getClaimTokenList } = require('../src/vesting');

router.get('/lastDeployed/:network/:wallet', (req, res) => {
    const wallet = req.params.wallet;
    const network = req.params.network;
    getLastDeployedContract(network, wallet, (data) => {
        res.send(data);
    })
})

module.exports = router;