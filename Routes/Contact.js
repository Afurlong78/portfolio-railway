const router = require("express").Router();
const nodemailer = require("nodemailer");
const { contactValidation } = require("../Validation/validation");

router.post("/contact", (req, res) => {
  const { error } = contactValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.CONTACT_EMAIL,
      pass: process.env.CONTACT_PASSWORD,
    },
  });

  const mailOptions = {
    from: req.body.email,
    to: process.env.MY_EMAIL,
    subject: req.body.subject,
    text: req.body.message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      // console.log(error);
      res.status(400).json({ success: false, data: error });
    } else {
      // console.log("Email sent" + info.response);
      res.status(200).json({ success: true, data: info });
    }
  });
});

module.exports = router;
