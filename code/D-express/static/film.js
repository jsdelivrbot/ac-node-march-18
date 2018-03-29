 var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(
    function timeLog (req, res, next) {
        console.log(req.originalUrl)
        next()
    }
)

// http://localhost:4000/film

router.get('/', function (req, res) {
  res.send('<img src="casablanca.jpg" alt="film poster"/>')
})

router.get('/comedy', function (req, res) {
  res.send('<h1>Film comedies</h1>')
})

module.exports = router
