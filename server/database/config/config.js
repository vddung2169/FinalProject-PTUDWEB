require('dotenv').config()
const {DB_HOST,DB_NAME,DB_USER,DB_PASSWORD} = process.env
const DB_TYPE = 'postgres' 

module.exports =  {
   development : {
     username :  DB_USER,
     password : DB_PASSWORD,
     database :  DB_NAME,
     host :  DB_HOST,
     dialect :  DB_TYPE
  },
   test : {
     username :  DB_USER,
     password : DB_PASSWORD,
     database :  DB_NAME,
     host :  DB_HOST,
     dialect :  DB_TYPE
  },
   production : {
     username :  DB_USER,
     password : DB_PASSWORD,
     database :  DB_NAME,
     host :  DB_HOST,
     dialect :  DB_TYPE 
  }
}
