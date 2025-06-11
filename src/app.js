const compression = require('compression');
const express = require('express');
const { default: helmet } = require('helmet');
const morgan = require('morgan');
const app = express();

// Init middlewares
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());

// Init database

// Init routes

// Handling error

module.exports = app;