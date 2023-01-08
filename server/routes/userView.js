const router = require('express').Router()
const busDataController = require('../controllers/busDataController')
const authorization = require('../middlewares/authorization')
const validateReset = require('../middlewares/validateReset')


router.get('/payment',(req,res) => res.render('payment'))
router.get('/login',(req,res,next) => authorization.authorizationUser(req,res,next,'/',''),(req,res) => res.render('login'))
router.get('/register',(req,res,next) => authorization.authorizationUser(req,res,next,'/',''),(req,res) => res.render('register'))
router.get('/forgetpassword',(req,res,next) => authorization.authorizationUser(req,res,next,'/',''),(req,res)=> res.render('forgetpassword'))
router.get('/confirm',(req,res) => res.render('confirmMail'))
router.get('/changepassword',validateReset,(req,res) => res.render('changepassword'))
router.get('/history',(req,res,next) => authorization.authorizationUser(req,res,next,'','/login'),busDataController.renderHistory)
router.get('/bus',(req,res,next) => authorization.authorizationUser(req,res,next,'',''),busDataController.renderBus)
router.get('/',(req,res,next) => authorization.authorizationUser(req,res,next,'',''),busDataController.renderIndex)
router.get('*',(req,res) => res.render('notfound404',{error: "Not found!"}))





module.exports = router