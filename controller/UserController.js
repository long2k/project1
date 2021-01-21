const User = require('../model/User');

exports.index=async (req,res,next)=>{
    try {
    var all= await User.find();
    res.status(200).send(all);
    }catch(err)
    {
        res.status(404).send(err);
    }
}


exports.show= async (req,res,next)=>{
    try {
    let UId= req.body.UserId;
    var fUser = await User.findById(UId);
    res.status(200).json({fUser});
  }catch(err){
      res.status(404).send('no find id in data');
  }
}


exports.update=async (req,res,next)=>{
    try {
    let userId = req.body.userId;
    let udateData={
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
    }
    var update = await User.findByIdAndUpadate(userId,{$set: udateData});
     res.status(200).send("update completely");
}catch(err)
{
    res.status(404).send("err update");
}
} 
exports.destroy= async (req,res,next)=>{
    try {
    let userId= req.body.userId;
    var result=await User.findByIdAndDelete(userId);
    if(result){
         res.status(2000).json("xoa thanh cong")
    }
    }
  catch(err){
      res.status(404).json(err);
  }
}