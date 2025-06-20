const db = require("../../../database/db");

const get_aadhar_users = async () => {
    const query = `select s.state_name, c.city_name, first_name, last_name 
                   from aadharUsers a
                   join state_master s on s.tid = a.state_id
                   join city_master c on c.tid = a.city_id`;
    const[rows] = await db.query(query);
    console.log(rows)
    return rows;
}

module.exports = {get_aadhar_users};