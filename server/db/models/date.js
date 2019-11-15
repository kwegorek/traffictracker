const Sequelize = require('sequelize')
const db = require('../db')

const Date = db.define('date', {
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
})

module.exports = Date
