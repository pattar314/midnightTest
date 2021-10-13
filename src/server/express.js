import express from 'express'
import path from 'path'
import {StaticRouter} from 'react-router-dom'
import React from "react"
import ReactDOMServer from 'react-dom/server'
import template from '../../template.js'
import compress from 'compression'
import helmet from 'helmet'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import './../client/styles/App.css'
import webpack from 'webpack'
import MainRouter from '../client/components/MainRouter.js'
import webpackConfig from './../../webpack.config.client'
import WebpackHotMiddleware from 'webpack-hot-middleware'
import UserRouter from './routes/user.routes'
require('dotenv').config()



const compiler = webpack( webpackConfig )

const app = express()
const port = process.env.PORT || 3000;
const CURRENT_WORKING_DIR = process.cwd()


app.use(require("webpack-dev-middleware")(compiler, {
     publicPath: webpackConfig.output.publicPath
}));
app.use(WebpackHotMiddleware(compiler));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cookieParser())
app.use(compress())
app.use(helmet({
    contentSecurityPolicy: false,
  }))
app.use(cors())
app.use(express.static(path.join(CURRENT_WORKING_DIR, 'public')))
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

app.use(UserRouter)

const mockResponse = {
    foo: 'bar',
    bar: 'foo'
};


app.get('/api', (req, res) => {
    res.send(mockResponse)
})

app.get('*', (req, res) => {
    console.log('request url: ', req.url)
    const context = {}
    const body = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <MainRouter />
        </StaticRouter>
        )



    if (context.url) {
        console.log('there was context...   redirecting')
        return res.redirect(303, context.url)
    }


    res.status(200).send(template({body: body}))
})

app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      res.status(401).json({"error" : err.name + ": " + err.message})
    }else if (err) {
      res.status(400).json({"error" : err.name + ": " + err.message})
      console.log(err)
    }
  })
  


app.get('/', (req, res) => {
    console.log('test 2')
    res.status(200).send(template())
})



app.listen(port, (err) => {
    if(err) {
        console.log(err);
    }

    console.info('Server started on port %s', port);
})


