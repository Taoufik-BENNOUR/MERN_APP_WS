const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName:String,
    lastName:{
        type:String,
        require:true
    },
    email : String,
    adress : String,
    phoneNumber : String,
    role:{type:String,
    enum:["admin","client"],default:"client"
        },
    password: String,
    products:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Products"
        }
    ]
})

module.exports = mongoose.model('User',userSchema)