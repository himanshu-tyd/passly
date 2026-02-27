import express from 'express'
import mongoose from 'mongoose'
import signupRouter from './routes/signup.route'
import signIn from './routes/signin.rout'
import PasswordRouter from './routes/password.route'
import cors from 'cors'


const app = express()

const port = process.env.PORT || 8000
const corsOptions = {
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
};

app.get('/', (req,  res)=>{
    res.send('Hello World')
})

app.use(express.json());
app.use(cors(corsOptions));
app.use('/api', signupRouter)
app.use('/api', signIn)
app.use('/api', PasswordRouter)


app.listen(port, async() => {

    try{
       
       await mongoose.connect(process.env.MONGO_URI)

       console.log('Connected to database')
       
       console.log('server is listening on port', port)

    }catch(error){
        console.log('error', error)
    }
})

