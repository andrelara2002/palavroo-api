
const { WordModel } = require('../model/WordModel')

function randomInRange(range) {
    return Math.floor(Math.random() * (range - 0) + 0)
}

async function randomWordBySizeAsync(length) {

    const words = await WordModel.find({ length })

    const index = randomInRange(words.length)

    return words[index]
}

async function randomWordAsync() {

    const size = WordModel.length

    const index = randomInRange(size)

    const word = await WordModel.findOne().skip(index).exec()

    return word
}



async function getAllAsync(req, res) {

    const data = await WordModel.find({})

    res.json(data)

}
async function getRandomAsync(req, res) {

    const data = await randomWordAsync()

    res.json(data)

}
async function getRandomInRangeAsync(req, res) {

    const { size } = req.params

    const data = await randomWordBySizeAsync(parseInt(size))

    res.json(data)
}

module.exports = {
    getAllAsync,
    getRandomAsync,
    getRandomInRangeAsync,
}


