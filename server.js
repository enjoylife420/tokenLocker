const express = require("express");
const cors = require('cors');
const path = require("path");

const app = express();

const locker = require('./routes/locker');
const vesting = require('./routes/vesting');
const { startLocker } = require('./src/locker');
const { startVesting } = require('./src/vesting');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

app.use(express.static('build'));

// use Routes
app.use('/api/locker', locker);
app.use('/api/vesting', vesting);

let PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running at (http://localhost:${PORT})`);
});

app.get('*', (req, res) => res.sendFile(path.resolve('build', 'index.html')));

startLocker(5000);