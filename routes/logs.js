const express = require("express");

const router = express.Router();

const { filterLogs } = require('../src/statistics');

router.get('/:network/:wallet', (req, res) => {
    const wallet = req.params.wallet;
    const network = req.params.network;
    filterLogs(network, wallet, (data) => {
        res.send(data);
    })
})

module.exports = router;