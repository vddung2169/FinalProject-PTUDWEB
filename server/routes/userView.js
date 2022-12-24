const router = require('express').Router()
const busDataController = require('../controllers/busDataController')

router.get('/login',(req,res) => res.render('login'))
router.get('/register',(req,res) => res.render('register'))
router.get('/history',(req,res) => res.render('history'))
router.get('/bus',(req,res) => busDataController.renderBus(req,res))
router.get('/',(req,res) => busDataController.renderIndex(req,res))






module.exports = router