const path = require('path')
const express = require('express')
const rootDir = require('../utils/path')
const router = express.Router()
const productsData = require('../utils/products')


router.get('/', (req, res, next) => {
    const viewsData = {
        products: productsData.products,
        pageTitle: 'Home Page - Products List'
    }
    res.render('home', viewsData)
})

module.exports = router;