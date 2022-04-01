const sequelize = require("../config/connection");
const { authCM } = require("../models");
const authData = require("./authCMSeeds.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  const newUsers = await authCM.bulkCreate(authData, {
    individualHooks: true,
    returning: true,
  });

  console.log(newUsers);

  process.exit(0);
};
seedDatabase();
