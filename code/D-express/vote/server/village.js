// ===================================================

const express = require('express')
const router = express.Router()

// ===================================================
let storage = require('node-persist');

let villages = [];

storage.init()
	.then(function() {
		storage.getItem('villages')
			.then(function(v) {
				villages = JSON.parse(v)
			})
	});
// ===================================================

const empty = ( req,res ) => {

	villages = [];
	storage.setItem('villages', JSON.stringify( villages ))

	.then(function(v) {
		console.log(v);
		res.json( villages );
	})
}

const getVotes = (req,res) => {
	res.json( villages )
}


const vote = (req,res) => {

	villages.push( req.body.village );

	storage.setItem('villages', JSON.stringify( villages ))
	.then(function(v) {
		res.json( villages );
	})


}

router.get('/getvotes',getVotes )
router.post( '/vote', vote )
router.get('/empty',empty )
// ===================================================

module.exports = router
