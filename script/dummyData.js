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
    start: '5 Hanover Square 11th Floor, New York, NY 10004',
    end: 'Philadelphia',
    userId: 1
  }
]

const trafficsamples = [
  {
    timepoint: '2019-11-15T08:14:22.296Z',
    travelTimeSeconds: 0,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T08:29:22.296Z',
    travelTimeSeconds: 841,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T08:44:22.296Z',
    travelTimeSeconds: 909,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T08:59:22.296Z',
    travelTimeSeconds: 141,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T09:14:22.296Z',
    travelTimeSeconds: 757,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T09:29:22.296Z',
    travelTimeSeconds: 959,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T09:44:22.296Z',
    travelTimeSeconds: 279,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T09:59:22.296Z',
    travelTimeSeconds: 657,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T10:14:22.296Z',
    travelTimeSeconds: 989,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T10:29:22.296Z',
    travelTimeSeconds: 412,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T10:44:22.296Z',
    travelTimeSeconds: 544,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T10:59:22.296Z',
    travelTimeSeconds: 1000,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T11:14:22.296Z',
    travelTimeSeconds: 537,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T11:29:22.296Z',
    travelTimeSeconds: 420,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T11:44:22.296Z',
    travelTimeSeconds: 991,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T11:59:22.296Z',
    travelTimeSeconds: 650,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T12:14:22.296Z',
    travelTimeSeconds: 288,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T12:29:22.296Z',
    travelTimeSeconds: 961,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T12:44:22.296Z',
    travelTimeSeconds: 751,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T12:59:22.296Z',
    travelTimeSeconds: 150,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T13:14:22.296Z',
    travelTimeSeconds: 913,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T13:29:22.296Z',
    travelTimeSeconds: 837,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T13:44:22.296Z',
    travelTimeSeconds: 9,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T13:59:22.296Z',
    travelTimeSeconds: 846,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T14:14:22.296Z',
    travelTimeSeconds: 906,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T14:29:22.296Z',
    travelTimeSeconds: 132,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T14:44:22.296Z',
    travelTimeSeconds: 763,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T14:59:22.296Z',
    travelTimeSeconds: 956,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T15:14:22.296Z',
    travelTimeSeconds: 271,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T15:29:22.296Z',
    travelTimeSeconds: 664,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T15:44:22.296Z',
    travelTimeSeconds: 988,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T15:59:22.296Z',
    travelTimeSeconds: 404,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T16:14:22.296Z',
    travelTimeSeconds: 551,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T16:29:22.296Z',
    travelTimeSeconds: 1000,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T16:44:22.296Z',
    travelTimeSeconds: 529,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T16:59:22.296Z',
    travelTimeSeconds: 428,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T17:14:22.296Z',
    travelTimeSeconds: 992,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T17:29:22.296Z',
    travelTimeSeconds: 644,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T17:44:22.296Z',
    travelTimeSeconds: 296,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T17:59:22.296Z',
    travelTimeSeconds: 964,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T18:14:22.296Z',
    travelTimeSeconds: 745,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T18:29:22.296Z',
    travelTimeSeconds: 159,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T18:44:22.296Z',
    travelTimeSeconds: 917,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T18:59:22.296Z',
    travelTimeSeconds: 832,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T19:14:22.296Z',
    travelTimeSeconds: 18,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T19:29:22.296Z',
    travelTimeSeconds: 851,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T19:44:22.296Z',
    travelTimeSeconds: 902,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T19:59:22.296Z',
    travelTimeSeconds: 124,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T20:14:22.296Z',
    travelTimeSeconds: 768,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T20:29:22.296Z',
    travelTimeSeconds: 954,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T20:44:22.296Z',
    travelTimeSeconds: 262,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T20:59:22.296Z',
    travelTimeSeconds: 670,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T21:14:22.296Z',
    travelTimeSeconds: 987,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T21:29:22.296Z',
    travelTimeSeconds: 396,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T21:44:22.296Z',
    travelTimeSeconds: 559,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T21:59:22.296Z',
    travelTimeSeconds: 1000,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T22:14:22.296Z',
    travelTimeSeconds: 522,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T22:29:22.296Z',
    travelTimeSeconds: 436,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T22:44:22.296Z',
    travelTimeSeconds: 993,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T22:59:22.296Z',
    travelTimeSeconds: 637,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T23:14:22.296Z',
    travelTimeSeconds: 305,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T23:29:22.296Z',
    travelTimeSeconds: 966,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T23:44:22.296Z',
    travelTimeSeconds: 739,
    routeId: 1
  },

  {
    timepoint: '2019-11-15T23:59:22.296Z',
    travelTimeSeconds: 167,
    routeId: 1
  },

  {
    timepoint: '2019-11-16T00:14:22.296Z',
    travelTimeSeconds: 920,
    routeId: 1
  },

  {
    timepoint: '2019-11-16T00:29:22.296Z',
    travelTimeSeconds: 827,
    routeId: 1
  },

  {
    timepoint: '2019-11-16T00:44:22.296Z',
    travelTimeSeconds: 27,
    routeId: 1
  },

  {
    timepoint: '2019-11-16T00:59:22.296Z',
    travelTimeSeconds: 856,
    routeId: 1
  },

  {
    timepoint: '2019-11-16T01:14:22.296Z',
    travelTimeSeconds: 898,
    routeId: 1
  },

  {
    timepoint: '2019-11-16T01:29:22.296Z',
    travelTimeSeconds: 115,
    routeId: 1
  },

  {
    timepoint: '2019-11-16T01:44:22.296Z',
    travelTimeSeconds: 774,
    routeId: 1
  },

  {
    timepoint: '2019-11-16T01:59:22.296Z',
    travelTimeSeconds: 951,
    routeId: 1
  },

  {
    timepoint: '2019-11-16T02:14:22.296Z',
    travelTimeSeconds: 254,
    routeId: 1
  },

  {
    timepoint: '2019-11-16T02:29:22.296Z',
    travelTimeSeconds: 677,
    routeId: 1
  },

  {
    timepoint: '2019-11-16T02:44:22.296Z',
    travelTimeSeconds: 985,
    routeId: 1
  },

  {
    timepoint: '2019-11-16T02:59:22.296Z',
    travelTimeSeconds: 388,
    routeId: 1
  },

  {
    timepoint: '2019-11-16T03:14:22.296Z',
    travelTimeSeconds: 566,
    routeId: 1
  },

  {
    timepoint: '2019-11-16T03:29:22.296Z',
    travelTimeSeconds: 1000,
    routeId: 1
  },

  {
    timepoint: '2019-11-16T03:44:22.296Z',
    travelTimeSeconds: 514,
    routeId: 1
  },

  {
    timepoint: '2019-11-16T03:59:22.296Z',
    travelTimeSeconds: 444,
    routeId: 1
  },

  {
    timepoint: '2019-11-16T04:14:22.296Z',
    travelTimeSeconds: 994,
    routeId: 1
  },

  {
    timepoint: '2019-11-16T04:29:22.296Z',
    travelTimeSeconds: 630,
    routeId: 1
  },

  {
    timepoint: '2019-11-16T04:44:22.296Z',
    travelTimeSeconds: 313,
    routeId: 1
  },

  {
    timepoint: '2019-11-16T04:59:22.296Z',
    travelTimeSeconds: 968,
    routeId: 1
  },

  {
    timepoint: '2019-11-16T05:14:22.296Z',
    travelTimeSeconds: 733,
    routeId: 1
  },

  {
    timepoint: '2019-11-16T05:29:22.296Z',
    travelTimeSeconds: 176,
    routeId: 1
  },

  {
    timepoint: '2019-11-16T05:44:22.296Z',
    travelTimeSeconds: 923,
    routeId: 1
  },

  {
    timepoint: '2019-11-16T05:59:22.296Z',
    travelTimeSeconds: 822,
    routeId: 1
  },

  {
    timepoint: '2019-11-16T06:14:22.296Z',
    travelTimeSeconds: 35,
    routeId: 1
  },

  {
    timepoint: '2019-11-16T06:29:22.296Z',
    travelTimeSeconds: 860,
    routeId: 1
  },

  {
    timepoint: '2019-11-16T06:44:22.296Z',
    travelTimeSeconds: 894,
    routeId: 1
  },

  {
    timepoint: '2019-11-16T06:59:22.296Z',
    travelTimeSeconds: 106,
    routeId: 1
  },

  {
    timepoint: '2019-11-16T07:14:22.296Z',
    travelTimeSeconds: 779,
    routeId: 1
  },

  {
    timepoint: '2019-11-16T07:29:22.296Z',
    travelTimeSeconds: 948,
    routeId: 1
  },

  {
    timepoint: '2019-11-16T07:44:22.296Z',
    travelTimeSeconds: 245,
    routeId: 1
  },

  {
    timepoint: '2019-11-16T07:59:22.296Z',
    travelTimeSeconds: 683,
    routeId: 1
  },

  {
    timepoint: '2019-11-16T08:14:22.296Z',
    travelTimeSeconds: 984,
    routeId: 1
  },

  {
    timepoint: '2019-11-16T08:29:22.296Z',
    travelTimeSeconds: 380,
    routeId: 1
  },

  {
    timepoint: '2019-11-16T08:44:22.296Z',
    travelTimeSeconds: 573,
    routeId: 1
  },

  {
    timepoint: '2019-11-16T08:59:22.296Z',
    travelTimeSeconds: 999,
    routeId: 1
  }
]

module.exports = {trafficsamples, routes, users}
