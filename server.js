const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const adminRoutes = require('./routes/admin')
const homeRoutes = require('./routes/home')

const app = express()

app.use(bodyParser.urlencoded({extended: false }))

app.use('/users', adminRoutes);
app.use(homeRoutes);

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname,'views', '404.html'))
})
// app.get((req, res, next) => {
//     console.log('Logging the request')
//     next()
// })


app.listen(8080, () => {
    console.log("Server started at port 8080")
})