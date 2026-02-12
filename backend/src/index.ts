import express from 'express'
import mongoose from 'mongoose'


const app = express()

const port = process.env.PORT || 8000

app.get('/', (req,  res)=>{
    res.send('Hello World')
})

app.listen(port, async() => {

    try{
        console.log(process.env.MONGO_URI)
       const res= await mongoose.connect(process.env.MONGO_URI)

       console.log(res.json())

       if(!res.ok){
        console.log('Database connection failed')
       }

    }catch(error){
        console.log('error', error)
    }
})

