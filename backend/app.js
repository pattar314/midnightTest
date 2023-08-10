const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const http = require('http')
const authRouter = require('./services/routes/authRoutes')
const { mongoose } = require('mongoose')
const dotenv = require('dotenv')
const mainRouter = require('./services/routes/mainRoutes')
const { loggerMiddleware } = require('./services/middleware/utitity')
const contactRouter = require('./services/routes/contactRoutes')
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

app.use(loggerMiddleware)
app.use('/auth', authRouter)
app.use('/contact', contactRouter)
app.use('/', mainRouter)


http.Server(app).listen(3001)


// TODO: events
  // create events works
  // get one and get all events works
  // update events works
  // delete events works
//

/*
  TODO: auth

*/