const { AlbumService } = require('../services');

const getAllAlbums = async (req, res) => {
  const foundAlbums = await AlbumService.findAllAlbums();
  console.log(foundAlbums);
};

module.exports = { getAllAlbums };
