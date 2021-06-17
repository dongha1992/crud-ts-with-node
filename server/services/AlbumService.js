const prisma = require('../prisma');

const findAllAlbums = () => {
  return prisma.album_list.findMany();
};

const findAlbum = (id) => {
  return prisma.album_list.findUnique({
    where: { id: Number(id) },
    include: {
      track_list: true,
    },
  });
};

module.exports = {
  findAllAlbums,
  findAlbum,
};
