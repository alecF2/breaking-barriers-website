const express = require('express');
const app = express();
const port = 5000;

require('dotenv').config();

app.use(express.json());

// instance of nodemailer
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  // Plug in Breaking Barriers service email
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.use(express.static('./assets'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post("/contact_us", (req, res) => {
  const mailOptions = {
    to: process.env.EMAIL_USER,
    subject: `${req.body.name}: ${req.body.subject}`,
    text: req.body.message,
    replyTo: req.body.email
  }

  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          console.log(error);  
          res.json(error);
      }
      else{
          console.log('sent' + info.response);
          res.json("Successfully sent email to " + mailOptions.to);
      }
  })
});

app.listen(port, () => {
    console.log('Currently listening on port ' + port);
});
