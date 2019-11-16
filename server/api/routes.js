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
    console.log(routes, 'routes')
    res.json(routes)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    console.log(req.body, '------------------->')
    const post_route = await Route.create(req.body)
    console.log('route posted')
    res.json(post_route)
  } catch (err) {
    next(err)
  }
})

router.get('/:routeid', async (req, res, next) => {
  try {
    console.log('--------', req.params.routeid)

    const one_routes = await Route.findByPk(req.params.routeid)

    console.log(one_routes, 'one_routes----------------')
    res.json(one_routes)
  } catch (err) {
    next(err)
  }
})

router.delete('/:routeid', async (req, res, next) => {
  console.log(req.params.id, 'delete')
  try {
    const routetodelete = await Route.findByPk(req.params.routeid)

    await routetodelete.destroy()
    console.log(routetodelete, 'routetodelete')

    res.json(routetodelete)
  } catch (err) {
    next(err)
  }
})
