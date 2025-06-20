const db = require("../../database/db");

const aadhar_user_reg = async (first_name, last_name,dob,mobile_number, email_id,address, stateName, cityName) =>{
    const query = `CALL add_aadhar_user(?,?,?,?,?,?,?,?,?);`
    let message = '';
    const values = [
        first_name,
        last_name,
        dob,
        mobile_number,
        email_id,
        address,
        stateName,
        cityName,
        message
    ]
    const [rows] = await db.query(query,values)
    if(rows[0]){
        console.log(rows[0]);
    } else{
        console.log("Error while adding users");
    }
    return rows[0];

}

module.exports = { aadhar_user_reg };