// async.test.js

// Async testing using MOCHA test framework

// npm install mocha
// npm install chai

/* Package.json

        "scripts": {
           "mocha": "mocha",
           "mocha-time": "mocha --timeout 4000"
        }
*/

// Before running tests, create a local web server in this folder:
// python -m SimpleHTTPServer 1200

// Run "npm run mocha" or "npm run mocha-time"

let expect = require('chai').expect;
let should = require('chai').should;

should();

let getData = require('../code').getData;

describe('Async tests', () => {

    let path = "http://localhost:1200/backpacks.json" ;

    let result; // Needs to be define here for scope reasons.

    beforeEach(async () => {
        result = await getData( path );
    })

    it('first pack', () => {
        expect(result[0].name).to.equal("Burton Blue");
        expect(result.length).to.equal(4);
    });

    it('first price', () => {
        result[0].should.have.property('price').equal(45.25)
        result.should.have.lengthOf(4);
    });

});
