console.log(`const users = [
  {
    id: 1,
    firstName: 'Joe',
    lastName: 'Schmoe',
    telephoneNumber: '555-555-4444',
    email: 'joe_schmoe@gmail.com',
    password: '12345',
    isAdmin: false
  },
  {
    id: 2,
    firstName: 'Jill',
    lastName: 'Till',
    telephoneNumber: '877-543-2311',
    email: 'jill_till@hotmail.com',
    password: '8735432311',
    isAdmin: true
  }
]
const routes = [
  {
    id: 1,
    start: '5 Hanover Square 11th Floor, New York, NY 10004',
    end: 'Philadelphia',
    userId: 1
  }
]
`)

function addMinutes(minutes) {
  const date = new Date()
  return new Date(date.setMinutes(date.getMinutes() + minutes))
}
console.log('const trafficsamples = [')
for (let i = 0; i < 100; ++i) {
  const timespent = Math.round(Math.abs(Math.sin(i) * 1000))
  const timepoint = addMinutes(i * 15).toISOString()

  console.log(`
  {
    timepoint: '${timepoint}',
    travelTimeSeconds: ${timespent},
    routeId: 1
  },`)
}
console.log(']')
console.log('')
console.log('module.exports = {trafficsamples, routes, users}')
