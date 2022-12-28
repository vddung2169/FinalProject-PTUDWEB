const accountDataController = require('../controllers/getAccountDataController')
const bcrypt = require("bcrypt");
const router = require("express").Router();
const jwtGenerator = require("../utils/jwtGenerator");
const authorize = require('../middlewares/authorization')
require('dotenv').config()
// const hbs = require('handlebars')
// const fs = require('fs')
// const path = require('path')
// const sendEmail = require('../utils/sendEmail')
// const validateReset = require('../middleware/validateReset')

// ! NOT FIX

// - REGISTER ONLY FOR ADMIN
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

 


    const user = await accountDataController.getAnAdminAccountByEmail(email)
   

    
    
    if(user.length > 0){
        return res.status(401).json("User is already existed!");
    }

    // Bcrypt the password
    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, salt);

    
    const newUser = await accountDataController.createAnAdminAccount(name,bcryptPassword,email)


    const token = jwtGenerator(newUser.maquantri)

    return res.json({token})


  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server error");

  }
});

// - LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await accountDataController.getAnAdminAccountByEmail(email)


    if(user.length === 0){
        return res.status(401).json("User is not exist");
    }
    

    const validPassword = await bcrypt.compare(
      password,
      user[0].matkhau
    );

    if (!validPassword) {
      return res.status(401).json("The password is wrong");
    }
    const token = jwtGenerator(user[0].maquantri);
    
    req.session.token = token

    res.redirect('/admin')

  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server error");
  }
});

// - VERIFY
router.post("/verify", authorize, (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server error");
  }
});

// - RESET PASSWORD
// router.post('/forgot', async (req,res) => {
//   try {
//     // TODO 1. get email and validate email from user
//     const {email} = req.body
    
//     const user = await pool.query("SELECT * FROM USER_TABLE WHERE email = $1", [
//       email,
//     ]);

//     if (user.rows.length === 0) {
//       return res.status(401).json("User is not exist");
//     }

//     // TODO 2. search ID from email and generate token with ID (using different secret key)
//     const token = jwtGenerator(user.rows[0].id,'secretKeyReset','15m');

//     // TODO 3. send token in url to that email with route reset password menu
//     const URL = `http://localhost:${process.env.PORT}/resetpassword/?rs=` + token 

//     const emailTemplate = fs.readFileSync(path.join(__dirname,'../../client/public/mailReset.hbs'),"utf8")

//     const emailTemplateCompiled = hbs.compile(emailTemplate)

//     const context = emailTemplateCompiled({url : URL})

//     if(sendEmail(context,email)){
//       //TODO return true to reset.js and redirect to another page
//       res.json(true)
//     }
//     else{
//       //TODO redirect to fail send mail page
//       res.json(false)
//     }

    
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).json("Server error");
//   }
// })

// router.post('/resetpassword/:token',validateReset, async (req,res) => {
//   try {
//     // TODO 5. get new password and bcrypt it
//     const {newpassword} = req.body

//     // Bcrypt the password
//     const salt = await bcrypt.genSalt(10);
//     const bcryptPassword = await bcrypt.hash(newpassword, salt);
  
//     // TODO 6. change password in database
//     const newUser = await pool.query(
//       "UPDATE USER_TABLE SET PASSWORD = $1 WHERE ID = $2",
//       [bcryptPassword,req.user]
//     );

//     res.json(true)


//   } catch (error) {
//     console.log(error.message)
//     res.status(500).json('Server error')
//   }


// })




module.exports = router;