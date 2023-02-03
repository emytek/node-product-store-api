const { fetchAllProducts } = require('../models/Products')
const { products } = require('../utils/products')

exports.getHomePage = (req, res) => {
    fetchAllProducts((products) => {
        const viewsData = {
            products,
            pageTitle: 'Home Page - Products List'
        }
        res.render('home', viewsData) 
    }) 
}