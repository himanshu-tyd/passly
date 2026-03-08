import express from 'express'
import mongoose from 'mongoose'
import signupRouter from './routes/signup.route'
import signIn from './routes/signin.rout'
import PasswordRouter from './routes/password.route'
import getDataRouter from './routes/getData'
import pinRouter from './routes/pin.route'
import cors from 'cors'
import cookieParser from 'cookie-parser'

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

app.get('/api', (req, res) => {
    res.json({ ok: true, message: 'API is running' })
})

app.use(cookieParser())
app.use(express.json());
app.use(cors(corsOptions));
app.use('/api', signupRouter)
app.use('/api', signIn)
app.use('/api', PasswordRouter)
app.use('/api', getDataRouter)
app.use('/api', pinRouter)

// 404 handler for /api routes - return JSON instead of default HTML
app.use('/api', (req, res) => {
  res.status(404).json({ success: false, message: `Not found: ${req.method} ${req.originalUrl}` })
})

app.listen(port, async() => {

    try{
       
       await mongoose.connect(process.env.MONGO_URI)

       console.log('Connected to database')
       
       console.log('server is listening on port', port)

    }catch(error){
        console.log('error', error)
    }
})

