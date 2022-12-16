const router = require('express').Router()


router.get('/login',(req,res) => res.render('login'))
router.get('/register',(req,res) => res.render('register'))
router.get('/history',(req,res) => res.render('history'))
router.get('/',(req,res) => res.render('index'))






module.exports = router