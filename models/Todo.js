const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    complited:{
        type:Boolean,
        default:false
    }
},{timestamp:true});

const Todo = mongoose.model("Todo",todoSchema);

module.exports = Todo;