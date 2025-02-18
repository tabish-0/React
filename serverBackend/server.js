const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
app.use(cors())

app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tabishraj007@gmail.com',
    pass: 'xfbm ebmu pvka hogv',
  },
});

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'tabishraj007@gmail.com',  // Apni email id yahaan daalein
    subject: `Message from ${name}`,
    text: `Message: ${message}\nFrom: ${name}\nEmail: ${email}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ success: false, message: 'Failed to send email' });
    }
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
