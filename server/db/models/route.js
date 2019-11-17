const Sequelize = require('sequelize')
const db = require('../db')

const Route = db.define('route', {
  start: {
    type: Sequelize.STRING
  },
  end: {
    type: Sequelize.STRING
  }
})

module.exports = Route
