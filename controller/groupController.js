const group= require('../model/group');
const User= require('../model/User');


exports.addmember= async(req,res,next)=>{
    try{
  var userId =  req.body.userId;
  var id_group = req.body.id_group;
   await group.findOneAndUpdate({_id:id_group}, {$push: {listmb:userId }});
  res.status(200).send('add  completely!!');
}catch (err){
    res.status(404).send("Dont add member");
   }; 
}
exports.infmember = async(req,res,next)=>{
    try{
    var userId = req.body.userId;
    var id_group = req.body.id_group;
    var user= req.body.username
         var result = await group.findById(id_group).populate('listmb');
          if(result.listmb.indexOf(userId)){
             await User.findByIdAndUpdate({_id:userId},{$set: {username : user}});
              res.status(200).send("Replace Completely!");
          };
        
    }catch(err){
        res.status(404).send('Failed');
    }

}