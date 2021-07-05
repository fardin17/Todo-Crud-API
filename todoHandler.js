const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const todoSchema = require('./Schema/todoSchema')
const Todo = new mongoose.model('Todo', todoSchema)

// Get All TODOs
router.get('/', async(req, res)=>{
     await Todo.find().select({
         __v : 0,
     })
     .exec((err, data)=>{
        if (err){
            res.status(500).json({
                error:'There was a error'
            })
        }
        else{
         res.status(200).json({
             result: data,
             message:'Success!'
         }) 
        }
     })
})

// Get Single TODO
router.get('/:id', async(req, res)=>{
    await Todo.find({_id: req.params.id}, (err, data)=>{
        if(err){
            res.status(500).json({
                Error: "There was an error!"
            })
        }
        else{
            res.status(200).json({
                result: data,
                message: "Task get Succesfully!"
            })
        }
    })
     
})

// Post Single Todo
router.post('/', async(req, res)=>{
   const newTodo = new Todo(req.body);
   await newTodo.save((err)=>{
       if (err){
           res.status(500).json({
               error:'There was a error'
           })
       }
       else{
        res.status(200).json({
            message:'Inserted Succesfully'
        }) 
       }
   })  
})

// Post Many Todos
router.post('/all', async(req, res)=>{
    await Todo.insertMany(req.body, (err)=>{
        if (err){
            res.status(500).json({
                error:'There was a error'
            })
        }
        else{
         res.status(200).json({
             message:'Inserted Succesfully'
         }) 
        }
    })     
})

// Update TODO
router.put('/:id', async(req, res)=>{
    await Todo.updateOne({_id: req.params.id},{
        $set:{
            title:req.body.title,
            priority: req.body.priority
        }, 
    },
        (err) =>{
            if (err){
                res.status(500).json({
                    error:'There was a error'
                })
            }
            else{
             res.status(200).json({
                 message:'Task updated Succesfully'
             }) 
            }   
        }
    )   
})

// Delete Todo
router.delete('/:id', async(req, res)=>{

    await Todo.deleteOne({_id: req.params.id}, (err)=>{
        if(err){
            res.status(500).json({
                Error: "There was an error!"
            })
        }
        else{
            res.status(200).json({
                message: "Task deleted succesfully"
            })
        }
    })
     
})

module.exports = router