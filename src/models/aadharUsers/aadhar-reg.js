const db = require("../../database/db");

const aadhar_user_registration = async (count) =>{
    const query = `CALL add_bulk_aadharusers('${count}');`
    const [rows] = await db.query(query)
    if(rows[0]){
        console.log(rows[0]);
    } else{
        console.log("Error while adding users");
    }
    return rows[0];

}

module.exports = { aadhar_user_registration };