const nodemailer = require('nodemailer');

let testEmailAccount = nodemailer.createTestAccount();
const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465 ,
    secure: true,
    auth: {
        user: 'testestes94@mail.ru',
        pass: '123a321b3'
    },
},
    {from: "Test <testestes94@mail.ru>"}
);
module.exports = function Mailer(message){
    transporter.sendMail(message, (err,inf) => err? console.log(err): console.log("Email sent",info));
}