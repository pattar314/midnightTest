import express from express
import emailCtl from './../controllers/email.controller'



const router = express.Router()

router.route('/sendcontact').
    get(emailCtl.sendContactMail)