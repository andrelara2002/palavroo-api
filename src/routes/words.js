const express = require('express')

const router = express.Router();

const { getAllAsync, getRandomAsync, getRandomInRangeAsync } = require('../controller/WordController')



/* router.get('/words', getAllAsync)

router.get('/random', getRandomAsync)

router.get('/randomsize/:size', getRandomInRangeAsync) */

module.exports = router;