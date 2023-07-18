const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const http = require('http')
const { loggerMiddleware } = require('./services/middleware/utitity')

const app = express()

app.use(cors())
app.use(helmet())

app.use(loggerMiddleware)

app.use('/', (req, res) => {
  return res.send('test passed')
})

http.Server(app).listen(3001)