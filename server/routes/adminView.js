const authorization = require('../middlewares/authorization')
const router = require('express').Router()
const garageDataController = require('../controllers/garageDataController')
const routeDataController = require('../controllers/routeDataController')
const seatDataController = require('../controllers/seatDataController')
const adminController = require('../controllers/adminController')


router.get('/viewgarage',authorization.authorizationAdmin,(req,res) =>
garageDataController.viewAllNhaxe(req,res,'viewgarage'))
router.get('/addgarage',(req,res) => res.render('addgarage'))
router.get('/updategarage',authorization.authorizationAdmin,(req,res) => 
garageDataController.viewAllNhaxe(req,res,'updategarage'))
router.get('/removegarage',authorization.authorizationAdmin,(req,res) => 
garageDataController.viewAllNhaxe(req,res,'removegarage'))
router.get('/viewseat',authorization.authorizationAdmin,seatDataController.viewSeat)
router.get('/updateseat',authorization.authorizationAdmin,seatDataController.viewSeatUpdate)
router.get('/addroute',authorization.authorizationAdmin,routeDataController.viewRouteAdd)
router.get('/updateroute',authorization.authorizationAdmin,(req,res) => 
routeDataController.viewRoute(req,res,'updateroute'))
router.get('/removeroute',authorization.authorizationAdmin,(req,res) => 
routeDataController.viewRoute(req,res,'removeroute'))
router.get('/login',(req,res) => res.render('loginAdmin'))
router.get('/register',(req,res) => res.render('registerAdmin'))
router.get('/forgotpassword',(req,res) => res.render('forgot-passwordAdmin'))

router.get('/',authorization.authorizationAdmin,adminController.renderAdmin)



module.exports = router