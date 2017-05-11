//Sending mail when creating user
'use strict';
const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'pfwebitesm@gmail.com',
        pass: 'EsUnaContraCabrona'
    }
});

// send mail with defined transport object
 module.exports.sendWelcome = function(email){ 
 	transporter.sendMail({
    from: '"Proyecto Final Super" <superpfweb@noreply.com>', // sender address
    to: email, // list of receivers
    subject: 'Welcome to US!', // Subject line
    text: '', // plain text body,
    html: '<h1>Welcome to our system, you\'ve signed up for our service, hope you enjoy registering your purposes.</h1>' // html body
}
, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});
};