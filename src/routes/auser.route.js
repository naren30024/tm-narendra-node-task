const express = require("express");
const {  get_city_aadhar_user, user_registration, get_aadhar_count_s, get_aadhar_user_sc } = require("../controllers/auser.controler");
const { uploadImage } = require("../controllers/file-upload/uploadImage");
const { upload } = require("../app");

const router = express.Router();

router.get("/city_aadhar_user", get_city_aadhar_user);
router.post("/user_registration", user_registration);
router.get("/state_wise_adhar_count_above_60", get_aadhar_count_s);
router.get("/state_city_wise_adhar_users", get_aadhar_user_sc)
router.post("/upload-profile", upload.single('profile'), uploadImage);

module.exports = router;
