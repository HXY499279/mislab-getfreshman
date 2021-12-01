const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../build')));

app.listen(9000);
module.exports = app