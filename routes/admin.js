const path = require('path')
const express = require('express')
const rootDir = require('../utils/path')
const router = express.Router()
const productsData = require('../utils/products')

router.get('/', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'user.html'))
})

router.get('/add', (req, res, next) => {
    // res.send();
    const viewData = {
        pageTitle: 'Add Product'
    }
    res.render('AddProduct', viewData)
})

router.post('/add', (req, res) => {
   const product = {
    title: req.body.title
   }
   productsData.addProduct(product)
    res.redirect('/')
})

module.exports = router;