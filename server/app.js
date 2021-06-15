const express = require('express');
const routes = require('./routes');
const logger = require('morgan')('dev');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(logger);
app.use(routes);
app.use(cors());

app.use((err, req, res, next) => {
  const { status, message } = err;
  console.log(err, 'err');
  res.status(status || 500).json({ message });
});

module.exports = app;
