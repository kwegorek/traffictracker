const User = require('./user')
const Route = require('./route')
const Timeline = require('./timeline')
const Description = require('./description')
const Date = require('./date')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

// Route.belongsTo(User, {through: checkedRoute})
User.hasMany(Route)

Route.hasMany(Timeline)

// Description.belongsTo(Route)

Timeline.hasOne(Date)
// Timeline.belongsToMany(Route)

module.exports = {
  User,
  Route,
  Timeline,
  Description,
  Date
}
