const mongoose = require('mongoose')

async function connectToDatabaseAsync(MONGO_URI) {

    await mongoose.connect(MONGO_URI)
        .then(() => console.debug('Connected to Database'))
        .catch(err => {
            console.error('Error connecting to database')
            console.error(err)

        })
}


module.exports = connectToDatabaseAsync