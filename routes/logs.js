const express = require("express");

const router = express.Router();

const { filterLogs } = require('../src/statistics');

router.get('/:wallet', (req, res) => {
    const wallet = req.params.wallet;
    filterLogs(wallet, (data) => {
        res.send(data);
    })
})

module.exports = router;