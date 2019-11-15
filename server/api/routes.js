const router = require('express').Router()
const {Route} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const routes = await Route.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['start', 'end']
    })
    console.log(routes, 'users')
    res.json(routes)
  } catch (err) {
    next(err)
  }
})
