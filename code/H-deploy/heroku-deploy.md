## Heroku for deploying NODE apps

- Create a free Heroku account
- 
- Install the Heroku Command Line Interface (CLI)
- This makes **heroku** available from command line.

		heroku login
		
- Clone the sample app.

		git clone https://github.com/heroku/node-js-getting-started.git
		cd node-js-getting-started
		
- Create a new app on Heroku.
- It allocates a random name

		heroku create
		
- Deploy local files to Heroku, optionally using GIT.

		git push heroku master
		
- Start up instance of app on Heroku

		heroku ps:scale web=1
		
- Open the web url of Heroku app:

		heroku open
		
- App logs

		heroku logs --tail
		
#### ProcFile

- This text file in root of app tells Heroku what command and file to start when the app is launched.

		web: node index.js
		
- web: tells Heroku to open this as an HTTP app.

#### Dynos

- Check dynos

		heroku ps
		
- Free dynos will sleep after a half hour of inactivity 
- Turn off:

		heroku ps:scale web=0
		
#### Node

- Heroku recognises the Node app by presence of package.json

#### Local running

- Open local folder containing app
- Install it with **npm install**

		heroku local web
		
#### Debug/logging

		heroku run node	
		heroku logs -a shielded-springs-69756			
		
#### Config VARS		

- At runtime, config vars are exposed as environment variables to the application

		heroku config -a shielded-springs-69756
		heroku config:set DEFAULT_CITY=Seville -a shielded-springs-69756

#### Notes

$Martha_