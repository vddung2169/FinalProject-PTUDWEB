const accountDataController = require('../controllers/getAccountDataController')
const bcrypt = require("bcrypt");
const router = require("express").Router();
const jwtGenerator = require("../utils/jwtGenerator");
// const authorize = require('../middleware/authorization')
require('dotenv').config()
const hbs = require('handlebars')
const fs = require('fs')
const path = require('path')
const sendEmail = require('../utils/sendEmail')
// const validateReset = require('../middleware/validateReset')



// - REGISTER
router.post("/register", async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    const user = await accountDataController.getAnAccountByEmail(email);

    if(user.length > 0){
        res.status(401).json("User is already existed!");
    }

    // Bcrypt the password
    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, salt);

    // add new user to database
    const newUser = await accountDataController.createAnAccount(fullname,bcryptPassword,email)


    const token = jwtGenerator(newUser.makhachhang)
    req.session.token = token
    res.redirect('/')


  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server error");

  }
});

// - LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await accountDataController.getAnAccountByEmail(email);

    if(user.length <= 0){
        return res.status(401).json("User is not exist");
    }

   

    const validPassword = await bcrypt.compare(
      password,
      user[0].matkhau
    );

    if (!validPassword) {
      return res.status(401).json("The password is wrong");
    }
    const token = jwtGenerator(user[0].makhachhang);
    
    req.session.token = token
    res.redirect('/')
  } catch (err) {
      console.error(err.message);
      res.status(500).json("Server error");
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
    
    const user = await accountDataController.getAnAccountByEmail(email);

    if(user.length <= 0){
        return res.status(401).json("User is not exist");
    }

    // TODO 2. search ID from email and generate token with ID (using different secret key)
    const token = jwtGenerator(user[0].makhachhang,'SECRET_KEY_RESEY','15m');

    // TODO 3. send token in url to that email with route reset password menu
    const URL = `http://localhost:${process.env.PORT}/resetpassword/?rs=` + token 

    const emailTemplate = fs.readFileSync(path.join(__dirname,'../../client/public/templates/mailReset.hbs'),"utf8")

    const emailTemplateCompiled = hbs.compile(emailTemplate)

    const context = emailTemplateCompiled({url : URL})

    if(sendEmail(context,email)){
      //TODO return true to reset.js and redirect to another page
      res.json(true)
    }
    else{
      //TODO redirect to fail send mail page
      res.json(false)
    }

    
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server error");
  }
})

router.post('/resetpassword/:token',validateReset, async (req,res) => {
  try {
    // TODO 5. get new password and bcrypt it
    const {newpassword} = req.body

    // Bcrypt the password
    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(newpassword, salt);
  
    // TODO 6. change password in database
    const newUser = await pool.query(
      "UPDATE USER_TABLE SET PASSWORD = $1 WHERE ID = $2",
      [bcryptPassword,req.user]
    );

    res.json(true)


  } catch (error) {
    console.log(error.message)
    res.status(500).json('Server error')
  }


})




module.exports = router;