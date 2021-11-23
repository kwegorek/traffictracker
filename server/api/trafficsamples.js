const router = require('express').Router()
const {Route} = require('../db/models')
const {TrafficSample} = require('../db/models')
module.exports = router

router.get('/:routeid', async (req, res, next) => {
  try {
    const trafficSamples = await TrafficSample.findAll({
      where: {routeId: req.params.routeid}
    })
    //console.log('api db', trafficSamples)
    res.send(trafficSamples)
  } catch (err) {
    next(err)
  }
})
