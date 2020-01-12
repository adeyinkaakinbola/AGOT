const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
 FirstName:{type:String,  required:true},
 Surname:{type:String, required:true},
 UserName:{type:String,required:true},
 Email:{type:String,required:true},
 Password:{type:String,required:true}

});

module.exports = mongoose.model('User', userSchema);
