- Install MongoDB 
- Install HomeBrew

		https://brew.sh/
		brew update
		
- 

		
- Create a folder on desktop

		cd desktop
		md kale
		
- Start MongoDB

		mongod --dbpath /Users/johncoumbe/Desktop/kale

- Start console in created folder

		cd /Users/johncoumbe/Desktop/kale
		mongo
		
- Create database

		use kale
		
- Create collection and object

		db.foodcollection.insert( { "name" : "broccoli" , "calories" : 45 } )
		
- Create array of objects

		grub = [ { "name" : "kale" , "calories" : 17 },{ "name" : "carrots" , "calories" : 22 },{ "name" : "peas" , "calories" : 45 },{ "name" : "mushrooms" , "calories" : 15 }]
		
- Add them to collection

		db.foodcollection.insert( grub )
		
- Display

		db.foodcollection.find().pretty()
		
- Connect to DB from Node

		var mongo = require('mongodb');
		var monk = require('monk');
		var db = monk('localhost:27017/kale');
		var collection = db.get('foodcollection');
		
		let item = { 'name':"abcd" , 'calories':56 };
		
		collection.insert( item, ( error,mdoc ) => {
		    if( error ) {
		        console.log(error);
		    } else {
		        console.log("ADDED", mdoc )
		    }
		})
		
		collection.find({},{},function(e,docs){
		    docs.forEach( ob => console.log( ob.name, ob.calories ))
		});
