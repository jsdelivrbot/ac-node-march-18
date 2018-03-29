
// New Code
let mongo = require('mongodb');
let monk = require('monk');

let DB = {
    server      : 'localhost:27017',
    database    : "/food",
    collection  : "grub",
    mongod      : "mongod --dbpath /Users/johncoumbe/Desktop/food",
    close       : "sudo kill -9 1024"
}
// =============================================================
// MONGO terminal
// Run mongo in terminal in same folder as mongod
// use food
// db.grub.find().pretty()
// =============================================================

let db = monk( DB.server + DB.database );

let coll = db.get( DB.collection );

let item = { 'name':"abcd" , 'calories':56 };

coll.insert( item, ( error,mdoc ) => {
    error ? console.log(error) : console.log("ADDED", mdoc )
})

coll.find({},{},function(e,docs){
    docs.forEach( ob => console.log( ob.name, ob.calories ))
});

let items = [
    { "name" : "kale" , "calories" : 17 },
    { "name" : "carrots" , "calories" : 22 },
    { "name" : "peas" , "calories" : 45 },
    { "name" : "mushrooms" , "calories" : 15 }
]

coll.insert( items )
    .then(
        function(results) {
            console.log("Inserted",results);
        },
        function(err) {
            console.log("Error" + err.message);
        }
    )
    .then(() => {
        return coll.find()
     })
    .then( docs => {
        console.log( docs );
    })
    .then(() => {
        console.log( "Disconnect" , db._connectionURI );
        db.close();
    })
