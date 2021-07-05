const mongoose = require ('mongoose')

const todoSchema = mongoose.Schema({
    title:{
        type: String,
        required: true,

    },
    priority:{
        type: String,
        enum: ['Low', 'Medium', 'High'],
        required: true,
    },
    
})
module.exports = todoSchema