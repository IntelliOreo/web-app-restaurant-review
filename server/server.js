import express from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userRoutes from './routes/UserRoutes.js'
import reviewRoutes from './routes/ReviewRoutes.js'
import sessionRoutes from './routes/SessionRoutes.js'
// import path from 'path'
// import cors from 'cors'
dotenv.config()

// Instantiate Express App
const app = express()
const PORT = process.env.PORT

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
// app.use(cors(--Needs cors options here--))

// Routes
app.use('/api/user', userRoutes)
app.use('/api/review', reviewRoutes)
app.use('/api/session', sessionRoutes)

// Not Found
app.use('*', (req, res) => {
  res.status(404).send('Not Found - 404 handler in server.js')
})

app.use((err, req, res, next) => {
  console.log(err)
  const defaultErr = { error: 'An error occur' }
  const errObj = Object.assign({}, defaultErr, err)
  console.log('errObj in global handler', errObj)
  res.status(500).json(errObj)
})

// Listen only if db is connected
mongoose.set('strictQuery', false)
mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => {
    console.log('Connected to Mongo Database')
  })
  .catch((e) => {
    console.log('Unable to connect to database')
    console.error('Mongo ERROR:', e)
  })

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})
