'use strict'

const db = require('../server/db')
const {DemoDistance} = require('../server/db/models')
var distance = require('google-distance')
const axios = require('axios')
require('dotenv').config('./env')
distance.apiKey = process.env.GOOGLE_DISTANCE_API_KEY

let origin = 'ChIJ4zGFAZpYwokRGUGph3Mf37k'
let destination = 'ChIJcwPEodjh5YkRPEKrXqApeCM'

//From Central
//To: Mystic Aquarium, Coogan Boulevard, Mystic, Connecticut, USA

async function fetchTravelTime() {
  const today = new Date(Date.now())
  try {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/distancematrix/json?origins=place_id:${origin}&destinations=place_id:${destination}&departure_time=now&key=${
          process.env.GOOGLE_DISTANCE_API_KEY
        }`,
        {
          headers: {'Access-Control-Allow-Origin': '*'},
          responseType: 'json'
        }
      )
      .then(response => {
        console.log(response, 'repsonse ----ft')
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
