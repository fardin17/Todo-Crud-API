const express = require ('express')
const mongoose = require ('mongoose')
const todoHandler = require('./todoHandler')
const url ='mongodb+srv://fardin17:Fardin14@cluster0.ksojf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const port = process.env.PORT || 9000;

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

app.listen(port, ()=>{
    console.log('app listening at port '+port)
})