const router = require('express').Router()
const ticketController = require('../controllers/ticketController')

router.post('/cancel',(req,res) => ticketController.buyTicket(req,res,'FAIL'))
router.post('/donepayment',(req,res) => ticketController.buyTicket(req,res,'SUCCESS'))
router.post('/prepare',ticketController.prepareTicket)
router.post('/newticket',ticketController.newTicket)


module.exports = router