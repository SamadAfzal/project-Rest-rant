// Modules and Globals
require('dotenv').config()
const express = require('express')
const router = require('./Controllers/places')

const app = express()

// Express Settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// Controllers & Routes
app.use('/places', router)

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

// Listen for Connections
app.listen(process.env.PORT)
