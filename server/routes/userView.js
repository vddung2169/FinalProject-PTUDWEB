const router = require('express').Router()
const busDataController = require('../controllers/busDataController')
const authorization = require('../middlewares/authorization')

router.get('/login',(req,res) => res.render('login'))
router.get('/register',(req,res) => res.render('register'))
router.get('/history',(req,res) => res.render('history'))
router.get('/bus',busDataController.renderBus)
router.get('/',(req,res,next) => authorization.authorizationUser(req,res,next,''),busDataController.renderIndex)






module.exports = router