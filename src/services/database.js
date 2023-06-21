const mongoose = require('mongoose')

async function connectToDatabaseAsync(MONGO_URI) {

    await mongoose.connect(MONGO_URI)
        .then(() => console.log('Connected to Database'))
        .catch(err => {
            console.log('Error connecting to database')
            console.log(err)
            process.exit(1)
        })
}


module.exports = connectToDatabaseAsync