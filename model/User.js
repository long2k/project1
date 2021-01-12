var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserInSchema = new Schema({
  username :{
      type:String,
     
  },
  email:{
     type:String,
    
  },
  password:{
      type:String,
      
  },
  phone:{
      type:String,
      
  }
},{timestamps:true});
var User = mongoose.model("User",UserInSchema);
module.exports=User;