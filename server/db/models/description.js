const Sequelize = require('sequelize')
const db = require('../db')

const Description = db.define('description', {
  name: {
    type: Sequelize.STRING
  },
  distance: {type: Sequelize.INTEGER}
})

module.exports = Description
