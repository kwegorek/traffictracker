const users = [
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
    start: [-74.007624, 40.705137],
    end: [-74.007108, 40.707894],
    userId: 1
  },
  {
    id: 2,
    start: [-73.999542, 40.715317],
    end: [-74.007108, 40.707894],
    userId: 1
  }
]

const trafficsamples = [
  {
    timepoint: '2019-11-15T03:14:22.296011',
    travelTimeSeconds: 1,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T03:15:22.296011',
    travelTimeSeconds: 2,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T03:16:22.296011',
    travelTimeSeconds: 3,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T03:17:22.296011',
    travelTimeSeconds: 1,
    routeId: 1
  }
]

module.exports = {trafficsamples, routes, users}
