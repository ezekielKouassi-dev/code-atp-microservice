const express = require('express')

const app = express()

require('dotenv').config()
const PORT = 4000

app.use(express.json())


//calling Database function
require('./config/database').connect();

//route importing and mounting
const otp = require('./routes/otpRoutes')

app.use('/api/v1', otp)


app.listen(PORT, ()=>{
    console.log("Server Started")
   
})