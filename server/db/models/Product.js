const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  imageURL: {
    type: Sequelize.TEXT,
    defaultValue:
      'https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg',
    validate: { isUrl: true, },
  },
  productURL: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: { isUrl: true, },
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
    defaultValue: 9.99,
  },
  description: {
    type: Sequelize.TEXT,
  },
})

module.exports = Product
