const User = require('../model/User');

exports.index= async (req,res,next)=>{
    try{ 
    let user = await User.find();
    if(user) res.json({res});
}catch(err){
    res.json({err:err});
}
}
exports.show= async(req,res,next)=>{
    try{
    let UserId= req.body.UserId;
    let userfind= await User.findById(UserId)
    }catch(err){
        res.json({err: err});
    }
    
}
exports.update= async (req,res,next)=>{
try{
    let userId = req.body.userId;

    let udateData={
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
    }
    let updateUser =await User.findByIdAndUpadate(userId,{$set: udateData})
     if(updateUser) res.json({message: "update successfully"});
}catch(err){
       res.json({err: err});
    }
}
exports.destroy= async (req,res,next)=>{
try{
    let userId= req.body.userId;
    let removeUser= await User.findByIdAndRemove(userId);
    if(removeUser){ res.json({message: "remove successfully"})};

}catch(err){
    res.json({err: err})
}
}