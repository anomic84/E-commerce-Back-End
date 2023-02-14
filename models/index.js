// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {

    through: {
        model: Category,
        unique: false
    },

    as: 'product_catagories'
})
// Categories have many Products
Category.hasMany(Product, {

    through: {
        model: Product,
        unique: false
    },

    as: 'product_catagories'
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
    through: {
        model: ProductTag,
        unique: false
    },
});
// Tags belongToMany Products (through ProductTag)
Product.belongsToMany(Tag, {
    through: {
        model: ProductTag,
        unique: false
    },
});
module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
};
