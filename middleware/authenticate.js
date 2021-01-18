const jwt = require('jsonwebtoken');

const  authenticate = async (req,res,next)=>{
    try{
        const token = req.headers.authenticate.split(' ')[1];
        const decode= await  jwt.verify(token,'register');
        next();
    }catch(err){
        res.send("you have not register or login");
    }   
}
module.exports=authenticate;