'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const app = express();

// Setup body parser
app.use(bodyParser.json()); // support json encoded bodies.

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

app.post('/api/status', function(req, res) {
    console.log('status endpoint request body: ' + JSON.stringify(req.body));
    let yesterday = req.body.yesterday;
    let today = req.body.today;
    let blockers = req.body.blocker;

    // Simply echo back what we just received.
    res.send(yesterday + ' ' + today + ' ' + blockers);
});

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;