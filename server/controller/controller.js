var Userdb =require('../model/model');

//------ C R U D --------//

//---Create and Save new user--//
exports.create=(req,res)=>{
    //--validate request--//
    if(!req.body){
        res.status(400).send({message:" Req Body can not be empty! "});
        return;
    }
    
    //--new user--//
    const  user = new Userdb({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status })
    
    //--Save user in the database--//
    user
    .save(user)
    .then(data=>{
     //  res.send(data)
     res.redirect('/adduser')
    })
    .catch(err=>{
       res.status(500).send({ 
            message:err.message||"Some error occurred while creating a create operation "

        })  
    })
}

//---Retrieve and return all users / retrive and return a single user --//
exports.find=(req,res)=>{
   // with parameter id -Single user
    if(req.query.id){
        const id = req.query.id;
    
    Userdb.findById(id)
    .then(data=>{
       if(!data){
           res.status(404).send({message:"Not found user with id "+id})

       }
       else{
           res.send(data)
       }
    })
    .catch(err=>
        {
            res.send(500).send({message:"errror retrivinf user with id "+id})
        })
}
    else{
        //--GET All--//
        Userdb.find()
        .then(user=>
            {res.send(user)})
        .catch(err=>{
            res.status(500).send({
                message:err.message||"Some error occurred while creating a find operation "})
        })
        

    }
    

}

//---Update user--//
//--By user id--//
exports.Update=(req,res)=>{
    if(!req.body){
        return
        res.status(400).send({message:" Req Body to update can not be empty! "});
        
    }
    //Url parametre 
    const id =req.params.id;
    Userdb.findByIdAndUpdate(id,req.body,{ useFindAndModify:false})
    .then(data=>{
        if(!data){
            res.status(404).send({message:'cannot Update user with ${id}. Maybe user not found! '})
        }
        else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message:"Error while Updating user"})
    })



       
    

}

//---Delete user--//
//--with specified user id in the request --//
exports.Delete=(req,res)=>{
    const id =req.params.id;
    Userdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:'cannot Delete user with ${id}. Maybe user not found! '})
        }
        else{
            res.send({
                message:"User was deleted successfuly!"
            })
        }
    }).catch(err=>{
        res.status(500).send({message:"Error while Deleting user"})
    })

    

}