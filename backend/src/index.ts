import express from 'express'
import mongoose from 'mongoose'
import RegisterRouter from './routes/register.route'
import LoginRouter from './routes/login.rout'


const app = express()

const port = process.env.PORT || 8000

app.get('/', (req,  res)=>{
    res.send('Hello World')
})


app.use(express.json())
app.use('/api', RegisterRouter)
app.use('/api', LoginRouter)

app.listen(port, async() => {

    try{
       
       await mongoose.connect(process.env.MONGO_URI)

       console.log('Connected to database')
       
       console.log('server is listening on port', port)

    }catch(error){
        console.log('error', error)
    }
})

