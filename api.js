const express = require ('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
require('dotenv/config');
//middilewares
//app.use('/post',()=>{
//console.log('This is a middleware warning');
//});
//Import Routes
const postRoute = require('./routes/posts');
app.use('/posts',postRoute);

//Routes
app.get('/',(req,res)=>{
res.send('we are human');
})
//app.get('/post',(req,res)=>{
//res.send('post by human');
//})
//connect To DB
mongoose.connect(process.env.DB_CONNECTION ,{useNewUrlParser:true},() =>
{console.log('connected to DB!')}
);


//how to we start lsitening
app.listen(3000);