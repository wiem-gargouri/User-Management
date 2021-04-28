const express = require('express');
const route = express.Router(); 

const services = require('../services/render');
//--Controller
const controller = require('../controller/controller'); 

route.get('/',services.homeRoutes);
    
    //to open index.ejs :
  
  
  route.get('/adduser',services.adduser);
    
  route.get('/updateuser',services.UpdateUser);

  //API 
  route.post('/api/users',controller.create)
  route.get('/api/users',controller.find)

  route.put('/api/users/:id',controller.Update)
  route.delete('/api/users/:id',controller.Delete)

  module.exports=route; 