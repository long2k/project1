const group= require('../model/group');
const User= require('../model/User');


exports.addmember= async(req,res,next)=>{
    try {
        let {userId,id_group}= req.body;
        let id = req.param("_id");
        var result = await group.findById(id_group);
        if(id == result.id_leader)
        {
            if (result.listmb.indexOf(userId)) {
                await group.findOneAndUpdate({_id : id_group}, {$push: {listmb:userId }});
                res.status(200).send('add  completely!!');
            }  
        }          
    } catch(error) {
         res.status(404).json({error: error});
   }; 
}

exports.deletember= async(req,res,next)=>{
    try {
        let {userId,id_group}= req.body;
        let id= req.param('_id');
        var result = await group.findById(id_group).populate('listmb');
        if(result.id_leader == id)
        {
        await User.findById({_id: userId});
            if (! result.listmb.indexOf(userId)) {
               await group.findOneAndUpdate({ _id:id_group}, {$pull: {listmb : userId }});
               res.status(200).send('remove  completely!!');
             }
        }
    } catch (err) {
        res.json(err);
    }
}


exports.infmember = async(req,res,next)=>{
    try {
        let{userId,id_group,user}= req.body;
        let id= req.param('_id');
        var result = await group.findById(id_group).populate('listmb');
        if(id == result.id_leader) {
            if (result.listmb.indexOf(userId)) {
                await User.findByIdAndUpdate({_id:userId},{$set: {username : user}});
                res.status(200).send("Replace Completely!");
              };
        }
 
    } catch(err) {
        res.status(404).json(err);
    }

}