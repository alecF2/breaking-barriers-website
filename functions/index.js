const functions = require("firebase-functions");
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const nodemailer = require("nodemailer");

app.use(express.json());

app.use(cors({
    origin: 'https://breaking-barriers-davis.web.app',
    methods: ['GET', 'POST']
}));

// in case CORS gets bypassed
app.use(async (req, res, next) => {
    console.log(req.get('origin'));
    if (req.get('origin') != 'https://breaking-barriers-davis.web.app' && req.get('origin') != 'http://localhost:5000') {
        res.status(401).send('Not authorized.');
        return;
    }
    next();
});

const transporter = nodemailer.createTransport({
    // Plug in Breaking Barriers service email
    service: 'gmail',
    auth: {
        user: functions.config().email.user,
        pass: functions.config().email.pass
    }
});

app.post("/api/contact_us", async (req, res) => {
    // Sending token to get verified
    let response;
    try {
        response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${functions.config().recaptcha.secret}&response=${req.body.token}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        });
        console.log('fetch finished.')
    } catch(err) {
        res.send({ message: "could not verify reCAPTCHA with Google; please try again in a few moments."});
        return;
    }
    const data = await response.json();
    console.log("user's score:", data.score);

    const mailOptions = {
        from: `${req.body.Name} [${req.body.email}] <process.env.EMAIL_USER>`,
        to: functions.config().email.receiver,
        subject: `${req.body.subject} from ${req.body.Name}`,
        text: `Use an HTML enabled client to view this email.`,
        replyTo: req.body.email
    }

    let message = req.body.message.split('\n');
    message = message.map(msg => `<p>${msg}</p>`);

    if (data.score <= 0.3) {
        // end
        res.status(406).send({ message: "reCAPTCHA could not be verified, score too low; if you are a human, try submitting again." });
        return;
    } else if (data.score <= 0.7) {
        // send with disclaimer
        mailOptions.html = [
            `<h3>Warning: Potential spam (user got low reCAPTCHA score)</h3>`,
            ...message
        ].join('\n');

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                res.send({ message: "Couldn't send email; try again in a few moments." });
                return;
            }
            else {
                console.log('sent ' + info.response);
                res.send({ message: "Email sent!" });
            }
        });
    } else {
        // 0.7+
        mailOptions.html = [...message].join('\n')

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                res.send({ message: "Couldn't send email; try again in a few moments." });
            }
            else {
                console.log('sent ' + info.response);
                res.send({ message: "Email sent!" });
            }
        });
    }
});

exports.app = functions.https.onRequest(app);
