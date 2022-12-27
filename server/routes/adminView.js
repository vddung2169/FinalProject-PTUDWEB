const router = require('express').Router()


router.get('/viewgarage',(req,res) => res.render('viewgarage'))
router.get('/addgarage',(req,res) => res.render('addgarage'))
router.get('/updategarage',(req,res) => res.render('updategarage'))
router.get('/removegarage',(req,res) => res.render('removegarage'))
router.get('/viewseat',(req,res) => res.render('viewseat'))
router.get('/updateseat',(req,res) => res.render('updateseat'))
router.get('/addroute',(req,res) => res.render('addroute'))
router.get('/updateroute',(req,res) => res.render('updateroute'))
router.get('/removeroute',(req,res) => res.render('removeroute'))
router.get('/login',(req,res) => res.render('loginAdmin'))
router.get('/register',(req,res) => res.render('registerAdmin'))
router.get('/forgotpassword',(req,res) => res.render('forgot-passwordAdmin'))
router.get('/',(req,res) => res.render('admin'))



module.exports = router