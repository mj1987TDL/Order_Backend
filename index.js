'use strict';
const { createLogger, format, transports } = require('winston');
require('winston-daily-rotate-file');
const fs = require('fs');

const path = require('path');
const env = process.env.NODE_ENV || 'development';
const logDir = '../../logs';


const express = require('express');
var app = express();

var order = require('./routes/order');

const bodyparser = require('body-parser');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // res.header('Cache-Control: public, max-age=80000, immutable');
    next();
});
app.use(bodyparser.json());

app.listen(3000, () => console.log('Express Server is Running at Port no.3000'));

app.use('/order', order);

app.get('/', function (req, res, next) {
    res.end('server started: ', req)
})
