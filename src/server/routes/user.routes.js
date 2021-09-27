import express from "express"
import emailCtl from './../controllers/email.controller'



const UserRouter = express.Router()

UserRouter.route('/sendcontact').post(emailCtl.sendContactMail)

export default  UserRouter 