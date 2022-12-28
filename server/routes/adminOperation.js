const router = require('express').Router()
const garageDataController = require('../controllers/garageDataController')
const authorization = require('../middlewares/authorization')

router.post('/createGarage',authorization,garageDataController.createGarage)
router.put('/updateGarage',authorization,garageDataController.updateGarage)
router.delete('/removeGarage',authorization,garageDataController.removeGarage)

module.exports = router