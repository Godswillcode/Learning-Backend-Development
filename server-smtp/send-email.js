const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "localhost",
    port: 23
})

transporter.sendMail(
    {
        from: "pamelaahiante@gmail.com",
        to: "omenukoonyekachi690@gmail.com",
        subject: "Washer woman",
        text:"please help me wash all the cars"
    },
    (err, info) => {
         if(err) {
             console.log(err);
         }
         console.log("Message sent successFully", info);
    }
)