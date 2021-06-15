const prisma = require('../prisma');

const findAllAlbums = () => {
  return prisma.album_list.findMany();
};

module.exports = {
  findAllAlbums,
};
