const express = require('express');
const app = express();
const port = 5000;

const fetch = require('node-fetch');

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

app.post("/captcha", (req, res) => {
  fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_CAPTCHA_KEY}&response=${req.body.token}`, {
    method: 'POST',
    headers: {'Content-Type':'application/json'}
  }).then(response => response.json()).then(data => {
    console.log(data);
  })
});

app.listen(port, () => {
    console.log('Currently listening on port ' + port);
});
