const { getCityAadharUserData } = require("../models/aadharUsers/aadhar-user-models");
const { aadhar_user_registration } = require("../models/aadharUsers/aadhar-reg");
const { get_aadhar_count } = require("../models/aadharUsers/state_wise_adhar_count_above_60/aadhar_count");
const { get_aadhar_users } = require("../models/aadharUsers/state_city_wise_adhar_users/aadhar_users");
const {aadhar_user_reg} = require("../models/aadharUsers/registration/adhar_user_reg");




const get_city_aadhar_user = async (req, res) => {
  try {
    const result = await getCityAadharUserData();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error fetching city aadhar users" });
  }
};



const user_registration = async (req, res) => {
  try{
    const {count} = req.body;
    console.log("count",count);
    const result = await aadhar_user_registration(count);
    console.log(result);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({message:error.message});
  }
}

const single_user_registration = async (req, res) => {
  try{
    const {first_name, last_name,dob,mobile_number, email_id,address, stateName, cityName} = req.body;
    console.log("count",count);
    const result = await aadhar_user_reg(first_name, last_name,dob,mobile_number, email_id,address, stateName, cityName);
    console.log(result);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({message:error.message ||"error while registration" });
  }
}

const get_aadhar_count_s = async (req, res) => {
  try {
    const result = await get_aadhar_count();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error fetching state  wise aadhar count" });
  }
};

const get_aadhar_user_sc = async (req, res) => {
  try {
    const result = await get_aadhar_users();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error fetching state & city wise aadhar users" });
  }
};


module.exports = {get_city_aadhar_user, user_registration, 
                  get_aadhar_count_s, get_aadhar_user_sc,
                  single_user_registration };