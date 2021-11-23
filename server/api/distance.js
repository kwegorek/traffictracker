// const router = require('express').Router()
// const {Route} = require('../db/models')

// const distance = require('google-distance')
// // module.exports = router

// distance.apiKey = process.env.GOOGLE_DISTANCE_API_KEY

// // router.get('/', async (req, res, next) => {
// //     try {
// //       const routes = await Route.findAll()
// //       res.status(200).json(routes)
// //     } catch (err) {
// //       next(err)
// //     }
// //   })

// router.get('/', async (req, res, next) => {
//     try {

//         const route = {
//             start: 'San Francisco, CA',
//             end: 'San Diego, CA',
//           }

//     // const response_distance = distance.get(
//     //     {
//     //       origin: 'hrllo',
//     //       destination: 'hrllo'
//     //     },
//     //     function(err, data) {
//     //       if (err) return //console.log(err, '----------error');
//     //       //console.log(data);
//     //   });

//       const post_route = await Route.create(route)

//       res.status(200).json(post_route )
//     } catch (err) {
//       next(err)
//     }
//   })
