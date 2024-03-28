const express = require('express');
const router = express.Router();

const Todo = require('../models/Todo');

router.get('/test',(req,res)=>{
    res.send("router is working properly")
});

router.post('/createTodo',async(req,res)=>{
try {
    const{title,description}= req.body;
    const newTodo =  new Todo({
        title,
    description
    })
    await newTodo.save();
    res.send("saved")
} catch (error) {
    res.status(500);
}
})

router.get('/getAllTodos',async(req,res)=>{
    try {
        const todos = await Todo.find();
        res.send(todos);
    } catch (error) {
        res.status(500);
    }
})
router.get('/getAllTodos/:id',async(req,res)=>{
    try {
        const todos = await Todo.findById(req.params.id);
        res.send(todos);
    } catch (error) {
        res.status(500);
    }
})
router.put('/updatetodo/:id',async(req,res)=>{
    try {
        const{title,description,complited} = req.body;
        const todos = await Todo.findByIdAndUpdate(req.params.id,{
            title,
            description,
            complited
        });
       
        res.send(todos).json("update");
    } catch (error) {
        res.status(500);
    }
})
router.delete('/deletetodo/:id',async(req,res)=>{
    try {
        const todos = await Todo.findByIdAndDelete(req.params.id);
       
        res.send(todos).json("delte");
    } catch (error) {
        res.status(500);
    }
})

module.exports=router;