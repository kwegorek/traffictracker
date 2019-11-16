const router = require('express').Router()
const {Route} = require('../db/models')
module.exports = router

router.get('/:routeid', async (req, res, next) => {
  try {
    console.log('------req.params.id--', req.params.routeid)

    const myroute = await Route.findByPk(req.params.routeid)
    const trafficSamples = await myroute.getTrafficsamples()
    res.json(trafficSamples)
  } catch (err) {
    next(err)
  }
})
