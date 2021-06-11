require('dotenv').config();

const { PORT } = process.env;
const http = require('http');
const app = require('./app');
const server = http.createServer(app);
// const prisma = require('./prisma');

const start = async () => {
  try {
    server.listen(PORT, console.log(`${PORT} on`));
  } catch (error) {
    console.log(error);
  } finally {
    // await prisma.$disconnect();
  }
};
start();
