/* const connectToDatabaseAsync = require('./src/services/database') */

const express = require('express')

/* const cors = require('cors') */

const words = require('./src/routes/words')

require('dotenv').config()

const app = express();

/* app.use(cors()) */
/* app.use(words) */

app.listen(9000, () => {
    console.log(`API listening on PORT ${9000} `)
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

/* connectToDatabaseAsync('mongodb+srv://vercel-user:9FwW7HFCwErUha80@palavroo.fywqccu.mongodb.net/') */

module.exports = app