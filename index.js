const express = require('express');
const path = require('path');
const log = require('./utils/log.js');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  log.main(`Server is listening at http://localhost:${port}`);
});