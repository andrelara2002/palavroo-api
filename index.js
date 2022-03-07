const fs = require('fs');
const express = require('express')
const path = require('path')

const cors = require('cors')
const bodyParser = require('body-parser')

const compression = require('compression') // Compress all routes
const helmet = require('helmet') // Security from well known vulnerabilities

const words = require('./src/routes/words')

const SERVER_PORT = 3002;
const app = express();

app.use(cors())
app.use(bodyParser())
app.use(compression())
app.use(helmet())
app.use(express.static(path.join(__dirname, 'public')));

//Defining routes to get words
app.use(words)

app.listen(process.env.PORT || SERVER_PORT)
    .on('listening', () => {
        console.log(`Server running on port ${SERVER_PORT}`)
    })
    .on('close', () => {
        console.warn('Server closed...')
    })


app.get('/', (req, res) => {
    res.json(
        {
            status: 200,
            message: 'Be welcome!',
            success: true
        }
    )
})