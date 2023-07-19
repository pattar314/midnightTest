const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const http = require('http')
const { loggerMiddleware } = require('./services/middleware/utitity')
const authRouter = require('./services/routes/authRoutes')
const { mongoose } = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()


const app = express()

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('connected to mongodb')
}).catch((error) => {
  console.log('there was an error connecting to mongodb: ', error)
})

app.use(cors())
app.use(helmet())
app.use(express.json())

app.use('/auth', authRouter)


app.use(loggerMiddleware)

app.use('/', (req, res) => {
  return res.send('test passed')
})

http.Server(app).listen(3001)