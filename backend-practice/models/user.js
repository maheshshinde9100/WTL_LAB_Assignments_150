const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.Schema("Users", UserSchema)