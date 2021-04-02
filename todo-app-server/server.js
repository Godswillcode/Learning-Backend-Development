const express = require('express');
const cors = require('cors') 
const router = require('./route/route-index')

dotenv = require('dotenv');

dotenv.config()

const db = require('./db/db')

const app = express()
const port = 3002

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use("/todos", router)


db.on('error', console.error.bind(console, 'MongoDB connection error'));
db.on('once', console.log.bind(db, 'Yay!! mongoose connected'))

app.listen(port, () => console.log(`server running on port ${port}`))