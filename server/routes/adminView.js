const authorization = require('../middlewares/authorization')
const accountDataController = require('../controllers/getAccountDataController')
const router = require('express').Router()
const garageDataController = require('../controllers/garageDataController')
const routeDataController = require('../controllers/routeDataController')


router.get('/viewgarage',authorization,(req,res) =>
garageDataController.viewAllNhaxe(req,res,'viewgarage'))
router.get('/addgarage',(req,res) => res.render('addgarage'))
router.get('/updategarage',authorization,(req,res) => 
garageDataController.viewAllNhaxe(req,res,'updategarage'))
router.get('/removegarage',authorization,(req,res) => 
garageDataController.viewAllNhaxe(req,res,'removegarage'))
router.get('/viewseat',(req,res)=> res.render('viewseat'))
router.get('/updateseat',(req,res) => res.render('updateseat'))
router.get('/addroute',authorization,routeDataController.viewRouteAdd)
router.get('/updateroute',authorization,(req,res) => 
routeDataController.viewRoute(req,res,'updateroute'))
router.get('/removeroute',authorization,(req,res) => 
routeDataController.viewRoute(req,res,'removeroute'))
router.get('/login',(req,res) => res.render('loginAdmin'))
router.get('/register',(req,res) => res.render('registerAdmin'))
router.get('/forgotpassword',(req,res) => res.render('forgot-passwordAdmin'))
router.post('/infor',authorization,async(req,res) =>{
    try {
        let userInfo = null
        
        if(req.userType === 'system'){
            userInfo = await accountDataController.getAnAccountByID(req.user)
        }
        
        res.json(userInfo[0]);
       
    
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
      }
})
router.get('/',authorization,(req,res) => res.render('admin'))



module.exports = router