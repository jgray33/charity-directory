const sequelize =  require("../config/connection")
const Charity = require("../models/Charity")

const charityData = require("./charityData.json")

const seedDataBase = async () => {
    await sequelize.sync({force:true})
        await Charity.bulkCreate(charityData, {
        individualHooks: true,
        returning: true,
    })
    console.log("Finished seeding")
process.exit(0)
}
seedDataBase()