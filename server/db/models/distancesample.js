const Sequelize = require('sequelize')
const db = require('../db')

// Defines time needed to drive the route at given time and date
const DemoDistance = db.define('demodistance', {
  minTimeSecText: {
    type: Sequelize.STRING
  },
  timeSecValue: {type: Sequelize.INTEGER},
  date: {type: Sequelize.DATE}
})

module.exports = DemoDistance
