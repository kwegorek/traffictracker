'use strict'

const db = require('../server/db')
const {DemoDistance} = require('../server/db/models')
var distance = require('google-distance')
const axios = require('axios')

distance.apiKey = process.env.GOOGLE_DISTANCE_API_KEY

async function fetchTravelTime() {
  const today = new Date(Date.now())
  try {
    axios
      .get(
        'https://maps.googleapis.com/maps/api/distancematrix/json?origins=place_id:EiFIb3l0IEF2ZSBTLCBRdWVlbnMsIE5ZIDExMTAyLCBVU0EiLiosChQKEgkFFzxHRF_CiRGVwYvSrucNdhIUChIJU6W15zZfwokRDhGErMSvCpw&destinations=place_id:ChIJU6W15zZfwokRDhGErMSvCpw&departure_time=now&key=AIzaSyDAYHekVLQMmbjpt_GCCbmSeT_HOVXF6c0',
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
      })
  } catch (err) {
    console.log('')
    
  }
}

async function runFetchTravelTime() {
  try {
    await fetchTravelTime()
    console.log('end')
  } catch (err) {
    console.log(err)
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('')
    return
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runFetchTravelTime()
}
