const express = require('express');
const router = express.Router();

const { AlbumController } = require('../controllers');

router.get('/', AlbumController.getAllAlbums);

module.export = router;
