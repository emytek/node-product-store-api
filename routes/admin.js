const path = require('path')
const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'user.html'))
})

router.get('/add', (req, res, next) => {
    // res.send();
    res.sendFile(path.join(__dirname, '../', 'views', 'adduser.html'))
})

router.post('/add', (req, res) => {
    console.log(req.body)
    console.log('Post Request ')
    // res.redirect('/')
})

module.exports = router;