const nodemailer = require("nodemailer");

const signup = async (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "rir7890@gmail.com",
      pass: "mhiioppwbkbaoyom",
    },
  });

  var mailOptions = {
    from: "rir7890@gmail.com",
    to: "prasad741499@gmail.com",
    subject: "Sending Email using Node.js done by Rahul Kumar",
    text: "That was easy!",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  res.status(201).json("sign up is succesfully");
};

const getbill = async (req, res) => {
  res.status(201).json("getbill successfully");
};

module.exports = {
  signup,
  getbill,
};
