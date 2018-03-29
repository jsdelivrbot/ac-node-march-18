		
## Debugging

#### Morgan

- We can add debugging tools to our code
- Morgan will log HTTP requests to the console

		npm install morgan
		
- Adding this **global Middleware** to server.js will log HTTP requests.

		var morgan = require('morgan')
		app.use(morgan('tiny'))

#### Debug

- We can install the Debug package. 
- This allows us to run debugging messages which we can turn on/off at the command line when we start the server.
- We first install debug

		npm install debug
		
- This creates a function called logMessage.

		var logMessage = require('debug')('logger')
		
- It will be enabled if we start the server with a DEBUG prefix at the command line.
- MAC version:

		DEBUG=logger nodemon server
		
- PC version:

		SET DEBUG=logger nodemon server
		
- We can make use of this with global Middleware

		let logger = require('debug')('logger')
		app.use( function( req,res,next ) {
			logger( req.body );
			next();
		})
		
- Note, this needs to be defined after the body parser code to work, as it refers to the req.body