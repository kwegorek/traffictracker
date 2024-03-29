'use strict'

const db = require('../server/db')
const {User, Route, TrafficSample} = require('../server/db/models')
const {users, routes, trafficsamples} = require('./dummyData')

async function seed() {
  await db.sync({force: true})
  //console.log('db synced!')

  const usersSeed = await Promise.all(users.map(user => User.create(user)))
  //console.log(`seeded ${usersSeed.length} users`)

  const routesSeed = await Promise.all(routes.map(route => Route.create(route)))
  //console.log(`seeded ${routesSeed.length} routes`)

  const trafficSeed = await Promise.all(
    trafficsamples.map(traffic => TrafficSample.create(traffic))
  )
  //console.log(`seeded ${trafficSeed.length} traffic`)

  // const trafficsamplesSeed = await Promise.all(
  //   trafficsamples.map(timepoint => TrafficSample.create(timepoint))
  // )
  // //console.log(`seeded ${trafficsamplesSeed.length} trafficsamples`)

  // const users = await Promise.all([
  //   User.create({email: 'cody@email.com', password: '123'}),
  //   User.create({email: 'murphy@email.com', password: '123'})
  // ])

  // //console.log(`seeded ${users.length} users`)
  // //console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  //console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    //console.log('closing db connection')
    await db.close()
    //console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
