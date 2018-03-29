"use strict";

// ======================================
// npm install request request-promise

let request = require('request-promise');

let getData = path => {

  let config = {
      method:"GET",
      url: path
  }

  return request( config )
    .then( r => JSON.parse( r ))
    .catch( e => e.message );

}

module.exports.getData = getData;
