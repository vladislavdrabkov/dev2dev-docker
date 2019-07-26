'use strict';

const express = require('express');
const path = require('path');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/static/index.html'));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
