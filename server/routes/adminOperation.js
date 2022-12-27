const router = require('express').Router()
const garageDataController = require('../controllers/garageDataController')
const authorization = require('../middlewares/authorization')

router.post('/createGarage',authorization,garageDataController.createGarage)


module.exports = router