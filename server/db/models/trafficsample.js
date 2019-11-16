const Sequelize = require('sequelize')
const db = require('../db')

// Defines time needed to drive the route at given time and date
const TrafficSample = db.define('trafficsample', {
  timepoint: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  travelTimeSeconds: {type: Sequelize.INTEGER}
})

module.exports = TrafficSample
