
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ContactSchema=  new Schema({
    user: {
        type:Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    phone: {
        type:String,
    },
    name: {
        type:String
    }
})
module.exports = mongoose.model('contact',ContactSchema);