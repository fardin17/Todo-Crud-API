const express = require ('express')
const mongoose = require ('mongoose')
const todoHandler = require('./todoHandler')
const url ='mongodb+srv://fardin17:Fardin14@cluster0.ksojf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app = express()
app.use(express.json())

mongoose.connect(url, { 
        useNewUrlParser: true,
        useUnifiedTopology: true
        })

.then(()=>{
    console.log('Fardin you have done a great job!')
})
.catch((err)=>{
    console.log('err')
})

app.use('/todo', todoHandler);

app.listen(9000, ()=>{
    console.log('app listening at port 9000')
})