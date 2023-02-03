const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const rootDir = require('./utils/path')
const adminRoutes = require('./routes/admin')
const homeRoutes = require('./routes/home')

//express
const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

//Static files 
app.use(express.static(path.join(rootDir, 'public')))
app.use('/css', express.static(path.join(rootDir, 'node_modules', 'bootstrap', 'dist', 'css')))

app.use(bodyParser.urlencoded({extended: false }))

//Routes
// app.use('/users', adminRoutes);
app.use('/products', adminRoutes);
app.use(homeRoutes);
app.use((req, res) => {
    const viewsData = {
        pageTitle: 'Page Not Found'
    }
    res.status(404).render('404', viewsData)
})

//server
app.listen(8080, () => {
    console.log("Server started at port 8080")
})