const express = require('express');
const app = express();
const port = 5000;

require('dotenv').config();

// instance of nodemailer
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// ymxgdnebswajhidv

app.use(express.json());

//app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.send('This is the root route of our website.');
});

app.post("/contact_us", (req, res) => {
  /*
  name: name
  email: email
  subject: subject
  message: message
  */
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: req.body.subject,
    text: req.body.message
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
