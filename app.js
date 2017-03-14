var nodemailer = require("nodemailer");


// var smtpTransport = nodemailer.createTransport("smtps://mail%40assesstm.com:pass@smtp.gmail.com"); // PUT YOUR SMTP HERE

smtpTransport.sendMail({  //email options
   from: "Sender Name <a.b@assesstm.com>", // sender address.  Must be the same as authenticated user if using Gmail.
   to: "a.b@gmail.com", // receiver
   subject: "Emailing with nodemailer", // subject
   text: "Email Example with nodemailer" // body
}, function(error, response){  //callback
   if(error){
       console.log(error);
   }else{
       console.log("Message sent: " + response.message);
   }

   smtpTransport.close(); // shut down the connection pool, no more messages.  Comment this line out to continue sending emails.
});
