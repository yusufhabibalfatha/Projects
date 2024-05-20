const nodemailer = require('nodemailer')

const send = (req, res) => {
    const data = {
        email_from: req.body.email_from,
        password: req.body.password,
        email_to: req.body.email_to,
        msg: req.body.message,
        html: req.body.html
    }
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: data.email_from,
            pass: data.password
        }
    })
    const mail = async () => {
        const info = await transporter.sendMail({
            from: data.email_from,
            to: data.email_to,
            subject: 'aaa',
            text: 'Hello World',
            html: data.html
        })
        console.log("Message sent: %s", info.messageId);
    }
    mail().then(()=>{
        res.status(201).json({msg: 'check your email'})
    }).catch(console.error)
}

module.exports = send