const express = require("express");
const cors = require('cors');
const path = require("path");

const app = express();

const locker = require('./routes/locker');
const vesting = require('./routes/vesting');
const logs = require('./routes/logs');
const { startLocker } = require('./src/locker');
const { fetchLogs, filterLogs } = require('./src/statistics');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use(express.static('build'));

// use Routes
app.use('/api/locker', locker);
app.use('/api/vesting', vesting);
app.use('/api/logs', logs);

let PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running at (http://localhost:${PORT})`);
});

app.get('*', (req, res) => res.sendFile(path.resolve('build', 'index.html')));

startLocker(5000);
fetchLogs(5000);