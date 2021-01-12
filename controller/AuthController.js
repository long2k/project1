const UserIn=require("../model/User");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const register =(req,res,next)=>{
      bcrypt.hash(req.body.password,10,function(err,hashPass){
          if(err){
              res.json({
                  error: err,
              })
          }
          var userIn = new UserIn ({
                username: req.body.username,
                email: req.body.email,
                password: hashPass,
                phone: req.body.phone,
            });
            userIn.save().then(UserIn=>{
                res.json({
                    message :"user added successfully"
                })
            })
            .catch(err=>{
                res.json({
                  message :' No add user.Having  a error '
                })
                
            }) 
      })
}
const login=(req,res,next)=>{
    var usr = req.body.username;
    var password = req.body.password;
    UserIn.findOne({username:usr})
    .then(user =>{
     if(user){
        bcrypt.compare(password,user.password,function(err,result){
            if(err){
                res.json({
                  error: err  
                })
            }
            if(result){
                res.json({
                    message:'login success',
                })
            }else{
                res.json({
                    message:'password doesnot matched'
                })
            }
        
        })
        
    }else {
        res.json({
            message:'No user found',
        })
    }
    })

}
module.exports={
    register,login
}