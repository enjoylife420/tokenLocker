const express = require("express");
const cors = require('cors');
const path = require("path");

const app = express();

const locker = require('./routes/locker');
const vesting = require('./routes/vesting');
const logs = require('./routes/logs');
const holders = require('./routes/holders');
const { startLocker } = require('./src/locker');
const { fetchLogs, initiateHolders } = require('./src/statistics');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
// app.use((req, res, next) => {
//     if (req.header('x-forwarded-proto') !== 'https') {
//       res.redirect(`http://${req.header('host')}${req.url}`)
//     } else {
//       next();
//     }
// });
app.use(express.static('build'));

// use Routes
app.use('/api/locker', locker);
app.use('/api/vesting', vesting);
app.use('/api/logs', logs);
app.use('/api/holders', holders);

let PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running at (http://localhost:${PORT})`);
});

app.get('*', (req, res) => res.sendFile(path.resolve('build', 'index.html')));

startLocker(5000);
fetchLogs(30000);
initiateHolders();