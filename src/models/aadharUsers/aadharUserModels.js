const db = require("../../database/db");

const cityAadharUser = (req, res) => {
  const query = `
    SELECT 
      c.city_name, 
      COUNT(u.aadhar_number) as user_count 
    FROM city_master c 
    LEFT JOIN aadharUsers u ON u.city_id = c.tid 
    GROUP BY c.city_name
  `;
  
  db.query(query, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Error fetching city aadhar users count" });
    }
    res.status(200).json(result);
  });
};

module.exports = { cityAadharUser };
