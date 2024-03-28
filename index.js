const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors= require('cors');
require('./db')
require('dotenv').config();
const PORT= 8000;

app.use(bodyParser.json());


app.get('/',(req,res)=>{
 res.send("api working ")
})
app.listen(PORT,()=>{
 console.log(`runnning on ${PORT} `)
})