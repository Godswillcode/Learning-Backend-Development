const port = 5000;
dotenv = require("dotenv").config({ path: '.env' });
express = require("express");
mongoose = require("mongoose");
app = express(); 

mongoose.connect(
    process.env.DATABASE_URL,
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology:true }
)


const db = mongoose.connection;

db.on('error', (err) => {
   console.log(err);
})

db.once('open', () => {
    console.log('YAY! WE ARE LIVE');
})

app.get("/", (req, res) => {
    res.send("<h1>Welcome to TechAcademy</h1> <p>Home for learning</p>");
})
.listen(port, () => {
    console.log(`The Express is server has started and is listening ${port}`);
})