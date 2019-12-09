const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id, {
      attributes: ['id', 'email', 'firstName', 'lastName']
    })

    console.log('user')
    res.json(user)
  } catch (err) {
    next(err)
  }
})

//all routes for a user
router.post('/:id/allroutes', async (req, res, next) => {
  try {
    // const user = await User.findByPk(req.params.id, {
    //   attributes: ['id', 'email', 'firstName', 'lastName', 'email'],
    //   // include: {model: Order}
    // })

    const userRoute = {
      start: req.body.start,
      end: req.body.end,
      userId: req.params.id
    }

    const post_route = await Route.create(userRoute)
    console.log('route posted by user')

    res.json(post_router)
  } catch (err) {
    next(err)
  }
})

//deleting route
router.delete('/:id/allroutes', async (req, res, next) => {
  try {
    const routeTodelte = await Order.findOne({
      where: {
        uderId: req.params.id
      }
    })
    await Route.destroy({
      where: {
        routeId: routeTodelte.id
      }
    })
    res.json('Route successfully deleted')
  } catch (err) {
    next(err)
  }
})

// deleting route
