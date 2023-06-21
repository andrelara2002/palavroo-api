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

// index.js
const express = require('express')

const app = express()
const PORT = 4000

app.listen(PORT, () => {
    console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
    res.send('Hey this is my API running 🥳')
})

app.get('/about', (req, res) => {
    res.send('This is my about route..... ')
})

// Export the Express API
module.exports = app