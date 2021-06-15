const express = require('express');
const cors = require('cors');
const router = express.Router();

const { AlbumController } = require('../controllers');

router.get('/', cors(), AlbumController.getAllAlbums);

module.exports = router;
