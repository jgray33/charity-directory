const Category = require("./Category")
const Charity = require("./Charity")
const Post = require("./Post")
const User = require("./User")


// Category has many charities
Category.hasMany(Charity, {
    foreignKey: "category_id"
})

// Charity belongs to a category
Charity.belongsTo(Category,{
    foreignKey: "category_id"
})

Post.belongsTo(User, {
    foreignKey: "user_id"
})




module.exports= {
    Category,
    Charity
}