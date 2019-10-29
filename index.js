const cron = require("node-cron");
const express = require("express");
const fs = require("fs");
let nodemailer = require("nodemailer");
http = require("http");
var request = require("request");

app = express();

// schedule tasks to be run on the server
// cron.schedule("* * * * *", function() {
//   console.log("running a task every minute");
// });

// create mail transporter
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "conarditoh@gmail.com",
    pass: "#conardson"
  }
});

// sending emails at periodic intervals
cron.schedule("0 7 9 * * *", function() {
  console.log("---------------------");
  console.log("Running Cron Job");

  // request("http://localhost/iceatrans/trans.php", function(
  //   error,
  //   response,
  //   body
  // ) {
  //   console.log(body);
  //   //console.log(smsmsg);
  // });

  //   const options = {
  //     hostname: "http://localhost/iceatrans/icea.php",
  //     port: 80,
  //     method: "GET"

  //     // headers: {
  //     //   "Content-Type": "application/x-www-form-urlencoded",
  //     //   "Content-Length": Buffer.byteLength(postData)
  //     // }
  //   };

  //   const req = http.request(options, res => {
  //     console.log(`STATUS: ${res.statusCode}`);
  //     console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  //     res.setEncoding("utf8");
  //     res.on("data", chunk => {
  //       console.log("BODY: ${chunk}");
  //     });
  //     res.on("end", () => {
  //       console.log("No more data in response.");
  //     });
  //   });

  //   req.on("error", e => {
  //     console.error(`problem with request: ${e.message}`);
  //   });

  //   // Write data to request body
  //   //   req.write(postData);
  //   req.end();

  // End

  let mailOptions = {
    from: "conarditoh@gmail.com",
    to: "conard@wizglobal.co.ke",
    subject: "Node JS Cron Job",
    text: "Hi Conard, this email was sent at exactly 9:00AM"
  };
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      throw error;
    } else {
      console.log("Email successfully sent!");
    }
  });
});

app.listen(3000);
console.log("Server started at port 3000");
