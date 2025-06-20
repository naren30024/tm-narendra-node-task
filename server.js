const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = require("./src/app");

dotenv.config();

app.use(cors());

app.use(express.json());



app.listen(process.env.port, () => {
  console.log(`Server is running on port ${process.env.port}`);
});
