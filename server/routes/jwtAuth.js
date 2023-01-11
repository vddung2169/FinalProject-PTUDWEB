const accountDataController = require('../controllers/getAccountDataController')
const bcrypt = require("bcrypt");
const router = require("express").Router();
const jwtGenerator = require("../utils/jwtGenerator");
const PORT = process.env.PORT || 3000
require('dotenv').config()
const hbs = require('handlebars')
const fs = require('fs')
const path = require('path')
const sendEmail = require('../utils/sendMail')
// const validateReset = require('../middleware/validateReset')



// - REGISTER
router.post("/register", async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    const user = await accountDataController.getAnAccountByEmail(email);

    if(user.length > 0){
       return res.render('register',{register_error : 'Email này đã được đăng ký tài khoản'})
        // res.status(401).json("Email này đã được đăng ký tài khoản");
    }

    // Bcrypt the password
    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, salt);

    // add new user to database
    const newUser = await accountDataController.createAnAccount(fullname,bcryptPassword,email)


    const token = jwtGenerator.jwtGenerator(newUser.makhachhang)
    req.session.token = token
    res.redirect('/')


  } catch (error) {
    console.error(error.message);
    res.status(500).render('notfound404',{error : 'Server error'})

  }
});

// - LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await accountDataController.getAnAccountByEmail(email);

    if(user.length <= 0){
       return res.render('login',{login_error :"Tài khoản này không tồn tại" })
    }

    const validPassword = await bcrypt.compare(
      password,
      user[0].matkhau
    );

    if (!validPassword) {
      res.render('login',{login_error :"Mật khẩu không đúng" })
    }else {
      const token = jwtGenerator.jwtGenerator(user[0].makhachhang);
    
      req.session.token = token
      res.redirect('/')
    }
    
  } catch (err) {
      console.error(err.message);
      res.status(500).render('notfound404',{error : 'Server error'})
  }
});

router.get('/logout',(req,res)=>{
    req.session.destroy()
    res.redirect('/')
})

// // - VERIFY
// router.post("/verify", authorize, (req, res) => {
//   try {
//     res.json(true);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).json("Server error");
//   }
// });

// - RESET PASSWORD
router.post('/forgot', async (req,res) => {
  try {
    // TODO 1. get email and validate email from user
    const {email} = req.body

    const hostname = req.hostname === 'localhost' ? 'http://' + req.hostname + ':' + PORT : 'https://' +  req.hostname
    
    const user = await accountDataController.getAnAccountByEmail(email);

    if(user.length <= 0){
        return res.status(401).json("User is not exist");
    }

    // TODO 2. search ID from email and generate token with ID (using different secret key)
    const token = jwtGenerator.jwtGeneratorForReset(user[0].makhachhang,email,'15m');


    // ! FIX RES HOSTNAME
    // TODO 3. send token in url to that email with route reset password menu
    const URL = hostname + `/changepassword/?rs=` + token 

    const emailTemplate = fs.readFileSync(path.join(__dirname,'../../client/public/templates/mailReset.hbs'),"utf8")

    const emailTemplateCompiled = hbs.compile(emailTemplate)

    const context = emailTemplateCompiled({url : URL})

    if(sendEmail.sendEmail('Reset your account password !',context,email)){
      //TODO return true to reset.js and redirect to another page
      res.json(true)
    }
    else{
      //TODO redirect to fail send mail page
      res.json('Send mail fail')
    }

    
  } catch (error) {
    console.error(error.message);
    res.status(500).render('notfound404',{error : 'Server error'})
  }
})

router.post('/resetpassword', async (req,res) => {
  try {
    // TODO 5. get new password and bcrypt it
    const {newpassword} = req.body
    const makhachhang = req.session.user

    // Bcrypt the password
    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(newpassword, salt);
  
    // TODO 6. change password in database
    await accountDataController.updatePassword(makhachhang,bcryptPassword)


    req.session.destroy()
    res.redirect('/login')


  } catch (error) {
    console.log(error.message)
    res.status(500).render('notfound404',{error : 'Server error'})
  }


})




module.exports = router;