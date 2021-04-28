//-------Mongodb Connection----------//
const mongoose=require('mongoose');
const connectDB = async()=>{
    try{
        //--mongodb connection string--//
        const con= await mongoose.connect(process.env.MONGO_URL,{
            //stop unwated wornings in the console
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false,
            useCreateIndex:true

        } )
        console.log('MongoDb connected :${con.connection.host}');
    }catch(err){
        console.log('err ici'+err);
        process.exit(1);

    }
}
module.exports=connectDB