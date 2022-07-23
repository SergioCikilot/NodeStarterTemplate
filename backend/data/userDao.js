const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function createUser(data) {
  const user = await prisma.user.create({
    data: data,
  });
  return console.log(`User with username ${data.username} added`);
}

async function findAllUsers() {
  const user = await prisma.user.findMany({});
  return user;
}

async function findUserByUserName(data) {
  const user = await prisma.user.findUnique({
    where: {
      username: data.username,
    },
  });

  if (!user) {
    message = { message: "Email or password invaldi" };
    return message;
  }

  return user;
}

module.exports = { createUser, findAllUsers, findUserByUserName };
