const express = require('express');
const router = express.Router({ mergeParams: true });

const AlbumRouter = require('./AlbumRouter');

router.use('/albums', AlbumRouter);

module.exports = router;
