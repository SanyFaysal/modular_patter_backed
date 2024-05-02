const dotenv = require('dotenv');
const path = require("path");


dotenv.config({path:path.join(process.cwd(), '.env')});


const config = {
    db_user:process.env.DB_USER,
    db_password: process.env.DB_PASSWORD
}

module.exports=config