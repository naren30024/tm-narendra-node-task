const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = require("./src/app");""
const {sendBirthdayEmails } = require("./src/utilities/email-utilities/sent_mail_daily")
dotenv.config();


sendBirthdayEmails();


app.listen(process.env.port, () => {
  console.log(`Server is running on port ${process.env.port}`);
});
