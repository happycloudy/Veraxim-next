const nodemailer = require('nodemailer');

let testEmailAccount = nodemailer.createTestAccount();
const transporter = nodemailer.createTransport({
    host: 'mail.netangels.ru',
    port: 25 ,
    secure: true,
    auth: {
        user: 'contact@veraxim.info',
        pass: 'YX7hVo7MrThAkMX'
    },
},
    {from: "Test <contact@veraxim.info>"}
);
module.exports = function Mailer(message){
    transporter.sendMail(message, (err,inf) => err? console.log(err): console.log("Email sent",info));
}