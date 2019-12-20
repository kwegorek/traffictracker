const router = require('express').Router()
const {Route} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const routes = await Route.findAll()
    res.status(200).json(routes)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    console.log(req.body, '------------------->')
    const post_route = await Route.create(req.body)

    res.status(200).json(post_route)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    console.log('--[[[[[---req.params.id--', req.params.id)

    const one_routes = await Route.findByPk(req.params.id)

    res.status(200).json(one_routes)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  console.log(req.params.id, 'delete')
  try {
    const routetodelete = await Route.findByPk(req.params.id)

    await routetodelete.destroy()
    console.log(routetodelete, 'routetodelete')

    res.json(routetodelete)
  } catch (err) {
    next(err)
  }
})
