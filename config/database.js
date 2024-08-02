const  mongoose = require('mongoose')

require('dotenv').config()

exports.connect = () => {
    mongoose.connect('mongodb+srv://ezekielkouassi42:RbDdVIVhFTXcdPmH@cluster0.ou5hvob.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
            useNewUrlParser: true,
            useUnifiedTopology : true
    }).then(()=>console.log("DB Connected Sucsfully✅"))
    .catch((error)=>{ 
        console.log("this error occured"+ error)
        process.exit(1)
    })
}