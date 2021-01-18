var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserInSchema = new Schema({
  username :{
      type:String,
      required:true,
      minlength:4,
      maxlength:8,
     
  },
  email:{
     type:String,
     required: true,
    
  },
  password:{
      type:String,
      required:true,

  },
  phone:{
      type:String,
      required:true,
      
  }
},{timestamps:true});
var User = mongoose.model("User",UserInSchema);
module.exports=User;