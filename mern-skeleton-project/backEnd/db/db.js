const mongoose = require("mongoose");
 dotenv = require('dotenv').config({ path: '.env' });

 mongoose.connect(process.env.DATABASE_URL, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
 },() => console.log("Data base connected"));

const db = mongoose.connection;


module.exports = db;