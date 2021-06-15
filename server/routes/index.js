const express = require('express');
const router = express.Router();

const AlbumRouter = require('./AlbumRouter');

router.use('/albums', AlbumRouter);

module.exports = router;
