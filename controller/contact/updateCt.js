const User = require('../../model/User');
const Contact = require('../../model/contact');

module.exports = async (req,res,next)=>{
    try {
        let{ name, id} = req.body;
        let item = await Contact.findOne({_id: id}).populate('user');
        if (!item) return res.status(404).json('not found');
        if (name)  item.name = name;
        if (!item.user) {
            let usr = await User.findOne({phone: item.phone});
            if (user) item.user = usr._id;
        }
        await item.save();
    } catch (error) {
        return res.serverError();
    }
}