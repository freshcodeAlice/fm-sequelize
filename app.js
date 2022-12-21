const express = require('express');
const cors = require('cors');
const router = require('./routes/index');
const {errorHandler} = require('./errorHandler');
const {STATIC_PATH} = require('./config/path.config');

const app = express();
const bodyParser = express.json();
app.use(bodyParser);
app.use(cors());
app.use(express.static(STATIC_PATH));
app.use('/api', router);

app.use(errorHandler);

module.exports = app;