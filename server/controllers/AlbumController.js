const { AlbumService } = require('../services');
const { errorGenerator, errorWrapper } = require('../errors');

const getAllAlbums = errorWrapper(async (req, res) => {
  const foundAlbums = await AlbumService.findAllAlbums();
  if (!foundAlbums) {
    errorGenerator({ message: 'Not Found', statusCode: 400 });
    return;
  }
  res.status(200).json(foundAlbums);
  res.json({ message: 'success' });
});

const getAlbumDetail = errorWrapper(async (req, res) => {
  const foundAlbums = await AlbumService.findAlbum();
  if (!foundAlbums) {
    errorGenerator({ message: 'Not Found', statusCode: 400 });
    return;
  }
  res.status(200).json(foundAlbums);
  res.json({ message: 'success' });
});

module.exports = { getAllAlbums, getAlbumDetail };
