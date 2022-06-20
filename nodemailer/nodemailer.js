const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "mykolaveres@meta.ua",
    pass: META_PASSWORD,
  },
};

// const email = {
//   to: "veresnickolay@gmail.com",
//   from: "mykolaveres@meta.ua",
//   subject: "New mailer send",
//   html: "<p>You have new request available<p>",
// };

const sendMail = async (data) => {
  const transporter = nodemailer.createTransport(nodemailerConfig);
  const email = { ...data, from: "mykolaveres@meta.ua" };
  try {
    transporter.sendMail(email);
    return true;
  } catch (error) {
    // throw error
  }
};

// transporter
//   .sendMail(email)
//   .then(() => {
//     console.log("email send success!");
//   })
//   .catch((error) => console.log(error.massage));

module.exports = sendMail;
