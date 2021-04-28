//---Http Server-----//
const express = require('express');
const dotenv=require('dotenv');
const morgan = require('morgan');
const bodyparser=require('body-parser');
const path=require('path');
//--MongoDb--//
const connectDB= require('./server/database/connection');

const app=express();

//---Port---//
dotenv.config({path:'config.env'})
const PORT=process.env.PORT || 8080

//---Morgan:Log_request//
app.use(morgan('tiny'));

//---Mongodb connection---//
connectDB();

//--parse req to body-parser--//
app.use(bodyparser.urlencoded({extended:true}));

//set view engine
app.set("view engine","ejs");
//app.set("views",path.resolve(__dirname,"views//ejs"))

//--Load assets--//
app.use('/css',express.static(path.resolve(__dirname,"assets/css")));
app.use('/img',express.static(path.resolve(__dirname,"assets/img")));
app.use('/js',express.static(path.resolve(__dirname,"assets/js")));

//---------Load Routers------------//

app.use('/',require('./server/routes/router'))

app.listen(3000,()=>{console.log('Server is running on http://localhost:$(3000)')});