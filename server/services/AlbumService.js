const prisma = require('../prisma');

const findAllAlbums = () => {
  return prisma.album_list.findMany();
};

const findAlbum = () => {};

module.exports = {
  findAllAlbums,
  findAlbum,
};
