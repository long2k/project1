const mongoose = require('mongoose');
const Schema=  mongoose.Schema;

var groupSchema=  new Schema({
    namegroup: String,
    listmb:[{
        type:Schema.Types.ObjectId,
        ref:'User'
    }],
    id_leader:{
        type:String,
        ref:'User'
    },

})
 
var group = mongoose.model('group',groupSchema);
module.exports= group;