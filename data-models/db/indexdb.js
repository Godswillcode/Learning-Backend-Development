const mongoose = require("mongoose");


 mongoose.connect(process.env.DATABASE_URL, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
 },() => console.log("Data base connected successfully"));

const db = mongoose.connection;


module.exports = db;