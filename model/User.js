var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserInSchema = new Schema({
  username :{
      type:String,
      required:true,
     
  },
  email:{
     type:String,
      required: true,
  },
  password:{
      type:String,
      required:/^[a-z0-9_]{3,10}$/,
      
  },
  phone:{
      type:String,
      required: true,
  }
},{timestamps:true});
var User = mongoose.model("User",UserInSchema);
module.exports=User;