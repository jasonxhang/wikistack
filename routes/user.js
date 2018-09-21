var express = require('express');
var app = express();
var router = express.Router();


router.get('/', (req, res) => {
    res.send('yo yo yo')
})
router.post('/', (req, res) => {
    res.send('yo yo yo')
})
router.get('/add', (req, res) => {
    res.send('yo yo yo')
})



module.exports = router;