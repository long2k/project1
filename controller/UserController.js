const User = require('../model/User');

exports.index=(req,res,next)=>{
    User.find().then(res=>{
        res.json({
            res
        })
    }).catch(err=>{
        res.json({
            message:'an err occured!',
        })
    })
}
exports.show=(req,res,next)=>{
    let UserId= req.body.UserId;
    User.findById(UserId)
    .then(res=>{
        res.json({
            res
        });
    }).catch(err=>{
        res.json({
            message:'no find id in database'
        })
    })
}
exports.update=(req,res,next)=>{
    let userId = req.body.userId;

    let udateData={
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
    }
    User.findByIdAndUpadate(userId,{$set: udateData})
    .then(()=>{
        res.json({
            message:"update successfully",
        })
    }).catch(err=>{
        res.json({
            message:"no update successfully",
        })
    })
}
exports.destroy=(req,res,next)=>{
    let userId= req.body.userId;
    User.findByIdAndRemove(userId)
    .then(()=>{
        req.json({
            message:'Deleted successfully'
        })
    })
    .catch(err=>{
        req.json({
            message:'no delete successfully',
        })
    })
}