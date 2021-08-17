const router = require('express').Router()
const {Route} = require('../db/models')
const axios = require('axios')
const distance = require('google-distance')
const fetchTravelTime = require('../../script/fetchTravelTime')
const {DemoDistance} = require('../db/models')

module.exports = router

distance.apiKey = process.env.GOOGLE_DISTANCE_API_KEY

router.get('/', async (req, res, next) => {
  try {
    const sampleTrafficData = await DemoDistance.findAll()

    res.status(200).json(sampleTrafficData)
  } catch (err) {
    next(err)
  }
})
