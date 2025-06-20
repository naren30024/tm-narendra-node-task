
const db = require("../../database/db");

const getCityAadharUserData = async () => {
  const query = `
    SELECT 
      c.city_name, 
      COUNT(u.aadhar_number) as user_count 
    FROM city_master c 
    LEFT JOIN aadharUsers u ON u.city_id = c.tid 
    GROUP BY c.city_name
  `;

  const[rows] = await db.query(query);
  return rows;
};

module.exports = { getCityAadharUserData };

