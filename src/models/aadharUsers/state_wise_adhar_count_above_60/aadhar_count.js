const db = require("../../../database/db");

const get_aadhar_count = async () => {
    const query = `select s.state_name, count(*) as age_above_60
                   from aadharusers u 
                   left join state_master s on s.tid = u.state_id
                   where timestampdiff(year, dob, curdate()) > 60 group by s.state_name`;
    const[rows] = await db.query(query);
    console.log(rows)
    return rows;

}
module.exports = {get_aadhar_count};