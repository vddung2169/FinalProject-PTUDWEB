const authorization = require('../middlewares/authorization')
const accountDataController = require('../controllers/getAccountDataController')
const router = require('express').Router()
const garageDataController = require('../controllers/garageDataController')


router.get('/viewgarage',authorization,(req,res) =>
garageDataController.viewAllNhaxe(req,res,'viewgarage'))
router.get('/addgarage',(req,res) => res.render('addgarage'))
router.get('/updategarage',authorization,(req,res) => 
garageDataController.viewAllNhaxe(req,res,'updategarage'))
router.get('/removegarage',(req,res) => res.render('removegarage'))
router.get('/viewseat',(req,res)=> res.render('viewsear'))
router.get('/updateseat',(req,res) => res.render('updateseat'))
router.get('/addroute',(req,res) => res.render('addroute'))
router.get('/updateroute',(req,res) => res.render('updateroute'))
router.get('/removeroute',(req,res) => res.render('removeroute'))
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