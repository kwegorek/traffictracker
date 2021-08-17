const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/routes', require('./routes'))
router.use('/trafficsamples', require('./trafficsamples'))
router.use('/demo', require('./demo'))
router.use('/samples', require('./samples'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
