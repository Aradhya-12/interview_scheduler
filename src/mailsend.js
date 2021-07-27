const nodemailer = require('nodemailer')
var smtpTransport = require('nodemailer-smtp-transport')

var transporter = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: 'limitedmedicare@gmail.com',
    pass: process.env.PASSWORD
  }
}));

const sendNotificationMail =  function(email, name, startTime, endTime) {
    var mailOptions = {
        from: 'limitedmedicare@gmail.com',
        to: email,
        subject: 'Notification of the scheduled interview',
        text: 'Hello ' + name +'! This is to inform you that an interview is scheduled from the scaler academy at ' + (new Date(parseInt(startTime))).toLocaleTimeString('en-IN') + '-' + (new Date(parseInt(endTime))).toLocaleTimeString('en-IN') + ' on ' + (new Date(parseInt(startTime))).toDateString('en-IN') +'.'
      }
    transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}) }

const sendUpdateMail =  function(email, name, startTime, endTime) {
    var mailOptions = {
        from: 'limitedmedicare@gmail.com',
        to: email,
        subject: 'Notification of the update in scheduled interview',
        text: 'Hello ' + name +'! This is to inform you that an interview is scheduled from the scaler academy with updated time of ' + (new Date(parseInt(startTime))).toLocaleTimeString('en-IN') + '-' + (new Date(parseInt(endTime))).toLocaleTimeString('en-IN') + ' on ' + (new Date(parseInt(startTime))).toDateString('en-IN') +'.'
      }
    transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}) }

module.exports={
    sendNotificationMail,
    sendUpdateMail
}