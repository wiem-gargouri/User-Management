exports.homeRoutes = (req,res)=>{
     //Make a get request to api/users
     axios.get("http://localhost:3000/api/users")
     .then(function(response){
       
        res.render('index',{users:response.data});
        
     })
     .catch(err=>{
         res.send(err)
     })
   
}


exports.adduser = (req,res)=>{
   
    res.render('adduser');
}

exports.UpdateUser = (req,res)=>{
    axios.get("http://localhost:3000/api/users",{params:{id:req.query.id}})
    .then(function(userdata){
        res.render('update',{user:userdata.data})
    })
    .catch(err=>{
        res.send(err)
    })
  
}

