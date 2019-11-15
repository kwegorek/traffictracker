'use strict'

const db = require('../server/db')
const {
  User,
  Timeline,
  Date,
  Description,
  Route
} = require('../server/db/models')
const {users, timelines, dates, descriptions, routes} = require('./dummyData')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const usersSeed = await Promise.all(users.map(user => User.create(user)))
  console.log(`seeded ${usersSeed.length} users`)

  const timelineSeed = await Promise.all(
    timelines.map(timepoint => Timeline.create(timepoint))
  )
  console.log(`seeded ${timelineSeed.length} timepoints`)

  const descriptionSeed = await Promise.all(
    descriptions.map(des => Description.create(des))
  )
  console.log(`seeded ${descriptionSeed.length} descriptions`)

  const routesSeed = await Promise.all(routes.map(route => Route.create(route)))
  console.log(`seeded ${routesSeed.length} routes`)

  // const users = await Promise.all([
  //   User.create({email: 'cody@email.com', password: '123'}),
  //   User.create({email: 'murphy@email.com', password: '123'})
  // ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
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
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
