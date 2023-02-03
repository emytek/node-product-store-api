const { saveProduct } = require('../../models/Products')
const { addProduct } = require('../../utils/products')

exports.getAddProductPage = (req, res) => {
    const viewData = {
        pageTitle: 'Add Product'
    }
    res.render('AddProduct', viewData)
}

exports.postAddProductPage = (req, res) => {
    const product = {
        title: req.body.title
       }
    //    addProduct(product)
        saveProduct(product)
        res.redirect('/')
}