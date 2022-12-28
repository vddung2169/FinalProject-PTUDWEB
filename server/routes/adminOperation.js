const router = require('express').Router()
const garageDataController = require('../controllers/garageDataController')
const authorization = require('../middlewares/authorization')
const routeDataController = require('../controllers/routeDataController')

router.post('/createGarage',authorization,garageDataController.createGarage)
router.put('/updateGarage',authorization,garageDataController.updateGarage)
router.delete('/removeGarage',authorization,garageDataController.removeGarage)
router.post('/createRoute',authorization,routeDataController.createRoute)
router.put('/updateRoute',authorization,routeDataController.updateRoute)
router.delete('/removeRoute',authorization,routeDataController.removeRoute)

module.exports = router