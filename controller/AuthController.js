const UserIn=require("../model/User");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const register = async (req,res,next)=>{
    try{
        var hashPass= await  bcrypt.hash(req.body.password,10);
          var userIn = new UserIn ({
                username: req.body.username,
                email: req.body.email,
                password: hashPass,
                phone: req.body.phone,
            });

            var sv= await userIn.save();
            res.status(200).send("register complete");
    }catch(err){
        res.status(404).send(err);
    }
}
const login= async(req,res,next)=>{
    try {
    var usr = req.body.username;
    var password = req.body.password;
    var fUser= await UserIn.findOne({username:usr});
       var result= bcrypt.compare(password,fUser.password);
       let token = jwt.sign({_id :fUser._id },'register');
       if(result ) res.status(200).send("Login completely " + token);
    }catch(err){
         res.status(404).send("login fail");
    }

}
module.exports={
    register,login
}