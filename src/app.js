const express = require("express");
const dotenv = require("dotenv");
const auserRoutes = require("./routes/auser.route");
const cors = require("cors");
const path = require('path');
const app = express();

app.use(cors());

app.use(express.json());


dotenv.config();

app.use('/api', auserRoutes);

module.exports = app;
