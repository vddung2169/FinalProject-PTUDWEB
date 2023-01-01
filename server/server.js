require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const {engine} = require('express-handlebars')
const path = require('path')
const cookieParser = require('cookie-parser')
const sessions = require('express-session')
const methodOverride = require('method-override')
const passport = require('passport')

// const methodOverride = require('method-override')
const busDataController = require('./controllers/getDataController')


app.use(sessions({
    secret: process.env.SECRET_KEY,
    saveUninitialized:true,
    cookie: { maxAge: 1000*60*60 },
    resave: false
}));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

// - Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))  // for DELETE/UPDATE method form

// - Handlebars
app.engine('hbs', engine({ 
    extname: '.hbs', 
    defaultLayout: "main",
    helpers: {
        calculateTime : require('./utils/calculateTime'),
        formatHours : require('./utils/formatTime').formatHours,
        formatRating: require('./utils/formatRating').formatRating,
        formatStar: require('./utils/formatRating').formatRatingStar,
        formatMoney: require('./utils/formatMoney'),
        formatTimeAdmin: require('./utils/formatTime').formatTimeAdmin,
        formatString : require('./utils/formatToString')
    }
}))
app.set('view engine','hbs')
app.set('views',path.join(__dirname,'../client/views'))

// - Static
app.use(express.static(path.join(__dirname,'../client/public')))


app.get('/createDatabase', (req,res)=>{
    const {Sequelize} = require('sequelize')
    const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: 'localhost',
        dialect:  'postgres'
    })
    sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";').then(() =>{
        let model = require('./database/models')
        model.sequelize.sync().then(()=>{
        res.send("create database tickettakeit successful")
    })  
})

    
})

app.post('/test', async(req,res)=>{
    const {name,email,password,number} = req.body
    const data = await require('./controllers/getAccountDataController').createAnAdminAccount(name,password,number,email)
    res.json(data)
})

app.use('/admin/GRUD',require('./routes/adminOperation'))
app.use('/admin/auth',require('./routes/jwtAuthAdmin'))
app.use('/admin',require('./routes/adminView'))
app.use('/auth/google',require('./routes/googleAuth'))
app.use('/auth',require('./routes/jwtAuth'))
app.use('/',require('./routes/userView'))






app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`))