const router = require('express').Router()
const garageDataController = require('../controllers/garageDataController')
const authorization = require('../middlewares/authorization')
const routeDataController = require('../controllers/routeDataController')

router.post('/createGarage',authorization.authorizationAdmin,garageDataController.createGarage)
router.put('/updateGarage',authorization.authorizationAdmin,garageDataController.updateGarage)
router.delete('/removeGarage',authorization.authorizationAdmin,garageDataController.removeGarage)
router.post('/createRoute',authorization.authorizationAdmin,routeDataController.createRoute)
router.put('/updateRoute',authorization.authorizationAdmin,routeDataController.updateRoute)
router.delete('/removeRoute',authorization.authorizationAdmin,routeDataController.removeRoute)

module.exports = router