const path = require('path')
const express = require('express')
const rootDir = require('../utils/path')
const router = express.Router()
const { getHomePage } = require('../controllers/HomeController')


router.get('/', getHomePage)

module.exports = router;