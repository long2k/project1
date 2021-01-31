const path = require('path');
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./uploads/');
        console.log(file.filename);
    },
    filename: function(req,file,cb){
        cb(null,file.fieldname+'-'+Date.now());
    }

});

var upload = multer({
    storage :storage,
    fileFilter : function(req,file,callback){
        if (file.mimetype=="image/png" || file.mimetype=="image/jpg") {
            callback(null,true);
        } else {
           callback(new Error("only jpg & png file supported "));
            callback(null,false);
        }
    },
    limits: {
        fileSize: 1024*1024*1,
    }
})

module.exports = upload;