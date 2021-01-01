const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = ({email, name}) => {
    sgMail.send({
        to: email,
        from: '515785037@qq.com',
        subject: 'Welcome to join task manager!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendGoodbyeEmail = ({email, name}) => {
    sgMail.send({
        to: email,
        from: '515785037@qq.com',
        subject: 'Goodbye my friend',
        text: `Goodbye ${name}. I hope we can meet soon in the furture.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}