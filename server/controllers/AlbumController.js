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
  const { id } = req.params;
  const foundAlbum = await AlbumService.findAlbum(id);
  if (!foundAlbum) {
    errorGenerator({ message: 'Not Found', statusCode: 400 });
    return;
  }

  res.status(200).json(foundAlbum);
  res.json({ message: 'success' });
});

module.exports = { getAllAlbums, getAlbumDetail };
