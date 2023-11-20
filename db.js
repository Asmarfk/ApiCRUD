const mongoose = require('mongoose')

const dbUri ='mongodb+srv://admin:1234@cluster0.bb9zcos.mongodb.net/employee_db?retryWrites=true&w=majority'


module.exports =() =>{
    return mongoose.connect(dbUri)
}