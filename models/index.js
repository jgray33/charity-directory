const Category = require("./Category")
const Charity = require("./Charity")


// Category has many charities
Category.hasMany(Charity, {
    foreignKey: "category_id"
})

// Charity belongs to a category
Charity.belongsTo(Category,{
    foreignKey: "category_id"
})

module.exports= {
    Category,
    Charity
}