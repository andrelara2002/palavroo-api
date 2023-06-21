/* const connectToDatabaseAsync = require('./src/services/database')

const express = require('express')

const cors = require('cors')

const words = require('./src/routes/words')

require('dotenv').config()

const { SERVER_PORT, MONGO_URI } = process.env;
const app = express();

app.use(cors())

//Defining routes to get words
app.use(words)

app.listen(process.env.PORT || SERVER_PORT)
    .on('listening', () => {
        console.debug(`Server running on port ${SERVER_PORT}`)
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

connectToDatabaseAsync(MONGO_URI)

module.exports = app */

const express = require('express')
const app = express();

app.listen(9000)
    .on('listening', () => {
        console.debug(`Server running on port ${SERVER_PORT}`)
    })
    .on('close', () => {
        console.warn('Server closed...')
    })

app.get('/', (req, res) => res.send('Hello World'))

module.exports = app