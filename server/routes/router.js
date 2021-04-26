const express = require('express');
const route = express.Router(); 

const services = require('../services/render');

route.get('/',services.homeRoutes);
    
    //to open index.ejs :
  
  
  route.get('/adduser',(req,res)=>{
    //  res.send("Crud Application");
    //to open adduser.ejs :
    res.render('adduser');
  })
  route.get('/updateuser',(req,res)=>{
    //  res.send("Crud Application");
    //to open adduser.ejs :
    res.render('update');
  })
  module.exports=route; 