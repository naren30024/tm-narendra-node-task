const express = require("express");
const dotenv = require("dotenv");
const auserRoutes = require("./routes/auser.route");
const cors = require("cors");
const multer = require('multer');
const path = require('path');

app.use(cors());

app.use(express.json());


dotenv.config();


const app = express();


// ✅ Multer Storage Configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, 'Uploads'));
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const ext = path.extname(file.originalname);
      cb(null, `profile-${uniqueSuffix}${ext}`);
    }
  });
  
  // ✅ Initialize Multer BEFORE using it
  const upload = multer({ storage: storage });



app.use('/uploads', express.static(path.join(__dirname, 'Uploads')));
app.use('/api', auserRoutes);

module.exports = { app, upload };
