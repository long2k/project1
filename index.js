var mongoose = require('mongoose');
var express = require("express");
var bodyPaser= require("body-parser");

const URI="mongodb://localhost:27017/nodejs";
 mongoose.connect(URI);

 const db= mongoose.connection;
const userRoute= require('./routes/admin');
const authRoute= require('./routes/auth');
 db.on("err",(err)=>{
   console.log(err);
 })

 db.once("open",()=>{
   console.log('connecting ....');
 })

 const app= express();
 app.use(bodyPaser.json());
 app.use(bodyPaser.urlencoded({extended:true}));

 const PORT = process.env.PORT||3000;
 app.listen(PORT,()=>{
   console.log("server is running...");
 })

 app.use('/api/user',userRoute);
 app.use('/api',authRoute);




