// utils/mailSender.js
const nodemailer = require('nodemailer');

const mailSender = async (email, title, body) => {
  try {
    // Create a Transporter to send emails
    // TODO : j'ai utilisé ce mail parce que je n'ai pas trouvé comment générer un code application.
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      auth: {
        user: 'yaoivan2002@gmail.com',
        pass: 'hxvc ceru qaah ckps'
      }
    });
    // Send emails to users
    let info = await transporter.sendMail({
      from: 'www.sandeepdev.me - Sandeep Singh',
      to: email,
      subject: title,
      html: body,
    });
    console.log("Email info: ", info);
    return info;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = mailSender;