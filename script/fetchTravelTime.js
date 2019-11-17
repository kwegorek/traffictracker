'use strict'

const db = require('../server/db')
const {User, Route, TrafficSample} = require('../server/db/models')
const {users, routes, trafficsamples} = require('./dummyData')

var distance = require('google-distance')

if (process.env.NODE_ENV !== 'production') require('../secrets')

distance.apiKey = process.env.GOOGLE_DISTANCE_API_KEY

async function fetchTravelTime() {
  await db.sync()
  const fetchedRoutes = await Route.findAll()
  fetchedRoutes.forEach(route => {
    const plainRoute = route.get({plain: true})
    console.log('-->', plainRoute)
    distance.get(
      {
        origins: [plainRoute.start],
        destinations: [plainRoute.end]
      },
      function(err, data) {
        if (err) return console.log(err)
        console.log(data)
      }
    )
  })
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runFetchTravelTime() {
  console.log('seeding...')
  try {
    await fetchTravelTime()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runFetchTravelTime()
}
