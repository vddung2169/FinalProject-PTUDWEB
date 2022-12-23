require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const {engine} = require('express-handlebars')
const path = require('path')
// const methodOverride = require('method-override')
const busDataController = require('./controllers/busDataController')

// - Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// app.use(methodOverride('_method'))  // for DELETE/UPDATE method form

// - Handlebars
app.engine('hbs', engine({ 
    extname: '.hbs', 
    defaultLayout: "main",
    helpers: {
        calculateTime : require('./utils/calculateTime'),
        formatHours : require('./utils/formatTime')
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

app.get('/test', busDataController.getAllChuyenxe)


app.use('/admin',require('./routes/adminView'))
app.use('/',require('./routes/userView'))






app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`))