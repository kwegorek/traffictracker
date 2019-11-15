const routes = [
  {
    id: 1,
    start: [-74.007624, 40.705137],
    end: [-74.007108, 40.707894]
  },
  {
    id: 2,
    start: [-73.999542, 40.715317],
    end: [-74.007108, 40.707894]
  },
  {
    id: 3,
    start: [-74.017241, 40.705417],
    end: [-74.007108, 40.707894]
  },
  {
    id: 4,
    start: [-74.010273, 40.704581],
    end: [-74.007108, 40.707894]
  }
]

const timelines = [
  {
    id: 1,
    timepoint: ['1', '2', '3', '4']
  },

  {
    id: 2,
    timepoint: ['7', '9', '3', '4']
  },

  {
    id: 3,
    timepoint: ['9', '2', '3', '4']
  },

  {
    id: 4,
    timepoint: ['9', '2', '3', '4']
  }
]

const descriptions = [
  {
    id: 1,
    routeId: 1,
    name: 'route1',
    distance: 9
  },

  {
    id: 2,
    name: 'route2',
    routeId: 2,
    distance: 3
  },

  {
    id: 3,
    name: 'route3',
    routeId: 3,
    distance: 4
  },

  {
    id: 4,
    name: 'route4',
    routeId: 4,
    distance: 5
  }
]

const users = [
  {
    firstName: 'Joe',
    lastName: 'Schmoe',
    telephoneNumber: '555-555-4444',
    email: 'joe_schmoe@gmail.com',
    password: '12345',
    isAdmin: false
  },
  {
    firstName: 'Jill',
    lastName: 'Till',
    telephoneNumber: '877-543-2311',
    email: 'jill_till@hotmail.com',
    password: '8735432311',
    isAdmin: true
  },
  {
    firstName: 'Mark',
    lastName: 'Zuckerberg',
    telephoneNumber: '516-216-2233',
    email: 'mark@facebook.com',
    password: 'iruletheworld',
    isAdmin: true
  },
  {
    firstName: 'Nick',
    lastName: 'Tesla',
    telephoneNumber: '917-682-3557',
    email: 'electricNic@aol.com',
    password: 'fizzBuzz',
    isAdmin: false
  }
]

module.exports = {timelines, descriptions, routes, users}
