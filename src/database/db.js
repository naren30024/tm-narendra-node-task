const mysql = require("mysql2/promise");
const dotenv = require("dotenv");

dotenv.config();

const db= mysql.createPool({
    host:process.env.host,
    user:process.env.user,
    password:process.env.password,
    port:3306,
    database:process.env.database,
})
if (db.getConnection){
    console.log("my sql connceted successfully");
}else{
    console.log("my sql connection failed");
}

module.exports = db;
