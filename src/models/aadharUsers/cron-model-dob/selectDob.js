const db = require("../../../database/db")
const moment = require('moment');
const date = moment().format('MM-DD');
console.log(date); // Output: 2025-06-20


const dob_cur_date = async () => {
    const query = `select first_name, last_name,dob,email_id from aadharUsers 
                   where DATE_FORMAT(dob, "%m-%d") = '${date}'`;

    const [rows] = await db.query(query);
    return rows;
}

module.exports = {dob_cur_date}