
let express = require('express')
let router = express.Router()
let ctrls = require('./controllers');

router.get('/', ctrls.root );
router.get('/film', ctrls.page );
router.get('/sports', ctrls.page );
router.get('/food', ctrls.food );

module.exports = router
