const sequelize = require("../config/connection");
const User = require("../models/User");
const Charity = require("../models/Charity");
const userData = require("./userData.json");
const charityData = require("./charityData.json");
const categoryData = require("./category-seeds.json");
const Category = require("../models/Category");

const seedDataBase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  
  await Category.bulkCreate(categoryData, {
    individualHooks: true,
    returning: true,
  });
  
  await Charity.bulkCreate(charityData, {
    individualHooks: true,
    returning: true,
  });


  process.exit(0);
};
seedDataBase();
