const express = require('express')
const app = express()
const mongoose = require('mongoose')
const subscribersRouter = require('./routes/subscribers')
require('dotenv').config()

app.use(express.json())
app.use('/subscribers', subscribersRouter)

// mongoose.connect(
//     process.env.DATABASE_URL,
//     { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }).then(db => {
//         console.log("Database connected");
//     }).catch(error => console.log("Could not connect to mongo db " + error));
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))

const port = 3005;
app.listen(port, () => console.log('Server Started',port));