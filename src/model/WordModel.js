const { Schema, model } = require('mongoose')

const WordSchema = new Schema({
    word: { type: String, required: true },
    length: { type: Number, required: true }
})

const WordModel = model('words', WordSchema)


module.exports = { WordSchema, WordModel }