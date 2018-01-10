// ******************************************************************************
//apiControllers.js - This file holds the api controller
//
// ******************************************************************************
// *** Dependencies
// ==============================================================================
const fs = require("fs")
const nodemailer = require('nodemailer')

//api controller 
module.exports =
{
    sendMail: function(req, res){
        let { firstName } = req.body.payload
        let { lastName } = req.body.payload
        let { email } = req.body.payload
        let { textBody } = req.body.payload

        let transporter = nodemailer.createTransport({
            service:'gmail',
            auth: {
                user: 'noreply.gordonsbbq@gmail.com',
                pass: 'D1meb@g86n87'
            }
        });

        message = 
            `***DO NOT RESPOND TO THIS EMAIL ADDRESS, USE THE SENDER'S ADDRESS LISTED BELOW TO RESPOND***

            New contact from Message from coreyrodems.com, 
            Sender's Name: ${firstName} ${lastName}
            Sender's Email (Use this to respond): ${email}

            Message
            ---------------------------------------------
            ${textBody}
            ---------------------------------------------`

        // setup email data with unicode symbols
        let mailOptions = {
            from: '"CoreyRodems.com", <noreply.gordonsbbq@gmail.com>', // sender address
            to: '"Corey", <coreyrodems@gmail.com>', // list of receivers
            subject: "New Message from CoreyRodems.com", // Subject line
            text: message // plain text body
        };

        transporter.verify(function(error, success) {
            if (error) {
                 console.log(error);
            } else {
                 console.log('Server is ready to take our messages');
            }
         });

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return 
                console.log(error);
            }
            res.json(info);
        });
    }
}