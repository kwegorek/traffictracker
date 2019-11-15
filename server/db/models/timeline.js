const Sequelize = require('sequelize')
const db = require('../db')

const Timeline = db.define('timeline', {
  timepoint: {type: Sequelize.ARRAY(Sequelize.STRING)}
  // traveltime - table name
  // columns:
  // measureDatetime: date
  // travellingSeconds: integer
})

module.exports = Timeline
