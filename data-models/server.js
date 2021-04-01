const express = require('express');
// const bodyParser = require('body-parser')
// const cors = require('cors') 


const db = require('./db/indexdb')

const app = express()
const port = 3001

app.use(express.urlencoded({ extended: true }))
// app.use(cors())
app.use('/', port)

db.on('error', console.error.bind(console, 'MongoDB connection error'));
db.on('once', console.log.bind(db, 'Yay!! mongoose connected'))

app.listen(Port, () => console.log(`server running on port ${port}`))