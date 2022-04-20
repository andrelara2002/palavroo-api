const fs = require('fs')
const express = require('express')

let words = fs.readFileSync('data/json_words.json').toString()
const json_words = JSON.parse(words)

const router = express.Router();

function randomWordInRange(data) {
    return Math.floor(Math.random() * (parseInt(data.length) - 0) + 0)
}

router.get('/words', (req, res) => {
    res.send(json_words)
})

router.get('/random', (req, res) => {
    res.send(json_words[randomWordInRange(json_words)])
})


router.get('/randomsize/:size', (req, res) => {
    const { size } = req.params
    try {
        const _size = parseInt(size)
        const data = json_words.filter(x => x.length === _size);
        res.send(data[randomWordInRange(data)])
    }
    catch (err) {
        console.log(err)
        res.json({
            status: 400,
            message: 'Please, send me a number!',
            success: false
        })
    }
})

module.exports = router;