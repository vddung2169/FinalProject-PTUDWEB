const router = require('express').Router()
const ticketController = require('../controllers/ticketController')


router.post('/prepare',ticketController.prepareTicket)


module.exports = router