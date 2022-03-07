const fs = require('fs')
const express = require('express')

let words = fs.readFileSync('data/json_words.json').toString()
const json_words = JSON.parse(words)

const router = express.Router();

router.get('/words', (req, res) => {
    res.json({
        status: 200,
        data: json_words,
        success: true
    })
})

router.get('/random', (req, res) => {
    const number = Math.floor(Math.random() * (parseInt(words.length) - 0) + 0);
    res.json({
        status: 200,
        success: true,
        data: json_words[number]
    })
})


router.get('/randomsize/:size', (req, res) => {
    const { size } = req.params
    try {
        const _size = parseInt(size)
        const data = words.filter(x => x.length === _size);
        console.log(`Words found: ${data}`)

        const number = Math.floor(Math.random() * (parseInt(data.length) - 0) + 0);
        res.json({
            status: 200,
            success: true,
            data: data[number]
        })

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