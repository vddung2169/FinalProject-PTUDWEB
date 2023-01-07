const router = require('express').Router()
const busDataController = require('../controllers/busDataController')


router.post('/seat',busDataController.getSeatData)


module.exports = router