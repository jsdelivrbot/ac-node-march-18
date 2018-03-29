let app = require('express')();
let http = require('http').Server(app);
let logger = require('debug')('logger')
let morgan = require('morgan')

app.use(morgan('dev'))

const PORT = 4000;
let holiday = [];

// DEBUG=logger node server.js

// cities.filter( (city,index,self) => self.indexOf(city) === index)

app.use( function( req,res,next ) {

	let city = req.query.city;

	logger( (() => {
	    if(( holiday.indexOf( city ) === -1) && city) {
	      holiday.push( city )
	    }
	    return holiday;
  	}) () );

	logger(city)

	next();
})

app.get('/', function(req, res){
  res.json( { barf:1024 })
 });

http.listen( PORT , () => console.log( "Listen",PORT ))
