const router = require('express').Router()
const {Route} = require('../db/models')
const axios = require('axios')
const distance = require('google-distance')
const db = require('../db')
const {DemoDistance} = require('../db/models')

// module.exports = router

module.exports = router

distance.apiKey = process.env.GOOGLE_DISTANCE_API_KEY

router.get('/', async (req, res, next) => {
  const timeElapsed = Date.now()
  const today = new Date(Date.now())
  try {
    let data = axios
      .get(
        `https://maps.googleapis.com/maps/api/distancematrix/json?origins=place_id:EiFIb3l0IEF2ZSBTLCBRdWVlbnMsIE5ZIDExMTAyLCBVU0EiLiosChQKEgkFFzxHRF_CiRGVwYvSrucNdhIUChIJU6W15zZfwokRDhGErMSvCpw&destinations=place_id:ChIJU6W15zZfwokRDhGErMSvCpw&departure_time=now&key=${
          process.env.GOOGLE_DISTANCE_API_KEY
        }`,
        {
          headers: {'Access-Control-Allow-Origin': '*'},
          responseType: 'json'
        }
      )
      .then(response => {
        let getTime = response.data.rows[0]

        let getTimeMinText = getTime.elements[0].duration_in_traffic.text
        let getTimeSecValue = getTime.elements[0].duration_in_traffic.value
        db.sync()

        DemoDistance.create({
          minTimeSecText: getTimeMinText,
          timeSecValue: getTimeSecValue,
          date: today
        })

        res.status(200).json({
          time: {text: getTimeMinText, value: getTimeSecValue, today: today}
        })
      })
  } catch (err) {
    next(err)
  }
})
