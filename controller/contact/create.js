const User = require('../../model/User');
const Contact = require('../../model/contact');

module.exports = async (req,res,next)=>{
    try {
        let {name, phone} =req.body;
        if(!name || !phone) {
            return res.badRequest();
        }
        let usr = await User.findOne({phone: phone});
        let item = await Contact.findOne({phone: phone});
        if (item) {
            item.name = name;
            if(usr) item.user = usr._id;
            await  item.save();
        } else {
            item = new Contact({
                name: name,
                phone: phone,
            })
            if(usr) item.user = usr._id;
            await item.save();
        }
    } catch (error) {
        return res.serverError();
        
    }
}