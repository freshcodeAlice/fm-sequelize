const express = require('express');
const router = require('./routes/index');
const {errorHandler} = require('./errorHandler');

const app = express();
const bodyParser = express.json();
app.use(bodyParser);
app.use('/api', router);

app.use(errorHandler);

module.exports = app;