'use strict'

const db = require('../server/db')
const {User, Route, TrafficSample} = require('../server/db/models')
const {users, routes, trafficsamples} = require('./dummyData')

var distance = require('google-distance')

if (process.env.NODE_ENV !== 'production') require('../secrets')

distance.apiKey = process.env.GOOGLE_DISTANCE_API_KEY

async function fetchTravelTime() {
  await db.sync()

  let routes = await Route.findAll()
  let samples = routes.map(async route => {
    return TrafficSample.create({
      travelTimeSeconds: 1000,
      routeId: route.id
    })
    //return route.setTrafficsamples([trafficsample])
  })
  return Promise.all(samples).then(oneNewSampleForEachRoute => {
    console.log(oneNewSampleForEachRoute)
  })
}
// console.log(fetchedRoutes)
// console.log("11", await Promise.all([future]))

// console.log("--",samples)
// samples.forEach(sample => console.log(sample.get({plain:true})))
// const plainRoute = route.get({plain: true})
// return 1
// console.log('-->', route)

// console.log("--->1")
// const trafficsample = TrafficSample.build(  {
//   timepoint: new Date().toUTCString(),
//   travelTimeSeconds: 1000
// })
// console.log("--->2", trafficsample.get({plain: true}))
//  route.setTrafficsamples([trafficsample])
// console.log("--->3")

//   distance.get(
//     {
//       origins: [plainRoute.start],
//       destinations: [plainRoute.end]
//     },
//     async function(err, data) {
//       if (err) return console.log(err)
//       console.log(data)
//       const trafficsample = await TrafficSample.create(  {
//         timepoint: new Date().toUTCString,
//         travelTimeSeconds: data[0].durationValue
//       })
//       await route.setTrafficsamples([trafficsample])

//         console.log("Saved!!", trafficsample.get({plain: true}))

//     }
//   )

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runFetchTravelTime() {
  console.log('fetching travel times for all routes...')
  try {
    await fetchTravelTime()
    console.log('end')
  } catch (err) {
    console.log(err)
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
