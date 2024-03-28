const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors= require('cors');
require('./db')
require('dotenv').config();
const PORT= 8000;

const todoRoutes = require('./Routes/TodoRoutes')


app.use(bodyParser.json());


app.use('/todoroutes',todoRoutes);
app.get('/',(req,res)=>{
 res.send("api working ")
})
app.listen(PORT,()=>{
 console.log(`runnning on ${PORT} `)
})