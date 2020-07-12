/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

let express = require('express')
let bodyParser = require('body-parser')
let nodemailer = require('nodemailer')
let awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')


// declare a new express app
let app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

console.log(process.env.CORSORIGIN)

const mailService = process.env.MAILSERVICE || 'gmail'
const mailUser = process.env.MAILUSERNAME || 'null'
const mailPass = process.env.MAILPASSWORD || 'null'
const corsOrigin = process.env.CORSORIGIN || 'http://localhost:3000'
const PORT = 5000
// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", 'https://www.jacobpowell.dev/')
  res.header("Access-Control-Allow-Origin", corsOrigin)
  res.header("x-apigateway-event")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, ")
  next()
});


/**********************
 * Example get method *
 **********************/

// app.post('/sendEmail', function(req, res) {
//   console.log(req)
//   let transporter = nodemailer.createTransport({
//     service: mailService,
//     auth: {
//       user: mailUser,
//       pass: mailPass
//     }
//   });
  
//   let mailOptions = {
//     from: mailUser,
//     to: mailUser,
//     subject: 'Sending Email using Node.js',
//     text: 'That was easy!'
//   };
  
//   transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//       res.send(error);
//     } else {
//       res.send('Email sent: ' + info.response);
//     }
//   });
// });
app.post('/sendEmail', (req, res)=>{ res.send('Testing')})
app.listen(PORT, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
