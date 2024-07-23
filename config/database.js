const  mongoose = require('mongoose')

require('dotenv').config()

exports.connect = () => {
    mongoose.connect('mongodb://localhost:27017/otp', {
            useNewUrlParser: true,
            useUnifiedTopology : true
    }).then(()=>console.log("DB Connected Successfully✅"))
    .catch((error)=>{ 
        console.log("this error occured"+ error)
        process.exit(1)
    })
}