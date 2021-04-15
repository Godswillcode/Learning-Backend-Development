const mysql = require('mysql');
require('dotenv').config();

express = require("express");
app = express(); 

const port = 5000;

const db = mysql.createConnection({
    user: process.env.DB_MYSQL_USER,
    password: process.env.DB_MYSQL_PASSWORD,
})

db.query("CREATE DATABASE tasks");
db.query("USE tasks")

db.query(`
CREATE TABLE tasks.tasks(
    id INT NOT NULL AUTO_INCREMENT,
    tasks TEXT NOT NULL, PRIMARY KEY ( id )
)
`);

const ignore = new Set ([
    "ER_DB_CREATE_EXISTS", "ER_TABLE_EXISTS_ERROR"
])

db.on("error", (err) => {
 if(ignore.has(err.code)) return;
 throw err;
})

db.query(`
INSERT INTO tasks.tasks (tasks)
VALUE ("Walk the dog");
`)

db.query(`
SELECT * FROM tasks.tasks;
`,(err, results, fields) => {
    console.log(results);
    db.end();
}
)

app.get("/", (req, res) => {
    res.send("<h1>Welcome to TechAcademy</h1> <p>Home for learning</p>");
})
.listen(port, () => {
    console.log(`The Express is server has started and is listening ${port}`);
})