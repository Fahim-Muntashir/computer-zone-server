const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.email",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.USER,
    pass: process.env.APP_PASSWORD,
  },
});
const mailOptions = {
  from: {
    name: "WEB Wizerd",
    address: process.env.USER,
  }, // sender address
  to: ["fahimmuntashir07@gmail.com"], // list of receivers
  subject: "Sending Using Nodemailer", // Subject line
  text: "Hello world?", // plain text body
  html: "<b>Hello world?</b>", // html body
};

const sendMail = async (transporter, mailOptions) => {
  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
  }
};

sendMail(transporter, mailOptions);
