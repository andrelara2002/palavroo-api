const express = require('express')

const router = express.Router();

import { getAllAsync, getRandomAsync, getRandomInRangeAsync } from '../controller/WordController';



router.get('/words', getAllAsync)

router.get('/random', getRandomAsync)

router.get('/randomsize/:size', getRandomInRangeAsync)

module.exports = router;