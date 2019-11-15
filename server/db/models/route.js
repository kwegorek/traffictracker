const Sequelize = require('sequelize')
const db = require('../db')

const Route = db.define('route', {
  start: {
    type: Sequelize.ARRAY(Sequelize.FLOAT) //Sequelize.ARRAY(Sequelize.TEXT)->check what format comes from API
  },
  end: {
    type: Sequelize.ARRAY(Sequelize.FLOAT)
  }
})

module.exports = Route
