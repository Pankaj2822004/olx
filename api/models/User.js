const mongoose = require("mongoose") ;
// eslint-disable-next-line no-undef
const { Schema } = mongoose;
const userSchema = new Schema({
   name:{
    type: String ,
    required: true
   },
   email:{
    type: String ,
    required: true ,
    unique: true
   },
   password:{
    type: String ,
    required: true
   },
   address:{
    type: String ,
    required: true
   }
  });
  const User= mongoose.model('user' , userSchema) ;

module.exports= User ;




