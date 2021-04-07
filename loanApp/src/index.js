import express from 'express'
import logger from 'morgan'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import route from './route'


dotenv.config()

mongoose.connect(
    process.env.DATABASE_URL,
    {
        useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true
    }
)


const db = mongoose.connection

const app = express()


db.on('error', console.error.bind(console, 'MongoDB connection error'));
db.on('once', console.log.bind('Yay!! mongoose connected'))



app.use(logger('dev'))

app.use(bodyParser.urlencoded({ extended: false }))

app.use(route)

const port = parseInt(process.env.PORT, 10) || 3007
app.set('port', port)
app.listen(port, () => console.log(`server running on port ${port}`))

export default app