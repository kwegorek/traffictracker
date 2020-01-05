const router = require('express').Router()
const {User} = require('../db/models')
const {Route} = require('../db/models')
const distance = require('google-distance')
distance.apiKey = 'AIzaSyB6ZqwIAn94sreynAfVzlypSg05hQzkjX8'

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll()
    console.log(users, 'users')
    res.status(200).json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id, {
      attributes: ['id', 'email', 'firstName', 'lastName']
    })
    res.status(200).json(user)
  } catch (err) {
    next(err)
  }
})

//get all routes for a user
router.get('/:id/allroutes', async (req, res, next) => {
  try {
    // console.log(req.session.passport.user, '----sessionUserId')
    const routes = await Route.findAll({
      where: {userId: req.body.id}
    })

    res.status(200).json(routes)
  } catch (err) {
    next(err)
  }
})

//all routes for a user

router.post('/:id/allroutes', async (req, res, next) => {
  try {
    const userRoute = {
      start: req.body.start,
      end: req.body.end,
      userId: req.params.id
    }

    await Route.create(userRoute)
    console.log('route cerated', response_distance)

    res.status(200)
  } catch (err) {
    next(err)
  }
})

// //deleting route
router.delete('/:id/allroutes', async (req, res, next) => {
  try {
    const routeTodelte = await Route.findOne({
      where: {
        userId: req.params.id
      }
    })
    await Route.destroy({
      where: {
        routeId: routeTodelte.id
      }
    })
    console.log('----------deleted')
    res.status(200)
  } catch (err) {
    next(err)
  }
})
