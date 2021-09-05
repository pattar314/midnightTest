import nodemailer from 'nodemailer'








const sendContactMail = (req, res) => {
    
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env[CONTACT_EMAIL],
            pass: process.env[CONTACT_PASS]
        }
    });

    let mailOptions = {}
    mailOptions.from = req.body[from];
    mailOptions.to = process.env[CONTACT_EMAIL];
    mailOptions.subject = `New contact for Midnight West from ${req.body[firstName]} ${req.body[lastName]}`;
    mailOptions.text = req.body[message];

    transporter.sendMail(mailOptions, (error, info) => 
    {
        if(error){
            console.log(error)
        } else{
            console.log('Email sent: ', info.response)
            alert('Email sent')
        }
    })
};

 



export default { sendContactMail }