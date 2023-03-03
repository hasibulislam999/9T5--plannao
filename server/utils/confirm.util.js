/**
 * Title: Confirmation token sender
 * Description: Send token through email to user throughout Nodemailer
 * Author: Hasibul Islam
 * Date: 12/11/2022
 */

/* external import */
const nodemailer = require("nodemailer");

module.exports = (userEmail, token, protocol, host) => {
  const transporter = nodemailer.createTransport({
    service: process.env.APP_SERVICE,
    auth: {
      user: process.env.APP_EMAIL,
      pass: process.env.APP_PASSWORD,
    },
  });

  var mailOptions = {
    from: process.env.APP_EMAIL,
    to: userEmail,
    subject: "Validation code to confirm registration, expired after 24 hrs",
    text: `Thank you for Signing up.
    Please, confirm by clicking here: ${protocol}://${host}/user/signup?token=${token}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error.name);
    } else {
      console.log("Email sent to: " + info.envelope.to[0]);
    }
  });
};
