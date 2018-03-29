"use strict";

let rp = require('request-promise');

const BASE_URL = 'http://localhost:4000/village/';

let vote = v => {

    let addVote = {
        method:"POST",
        url: BASE_URL + 'vote',
        form: {
            village: v
        }
        // headers: {
        //     "content-type": "application/json",
        //     "accept": "application/json"
        // }
    }

    rp( addVote )

        .then(function (response) {

            let getVotes = {
                method:"GET",
                url: BASE_URL + 'getvotes'
            }

            return rp( getVotes )
        })

        .then(function (response) {
            console.log(response);
        })

        .catch(function (e) {
            console.log( e.response.statusCode , e.response.request.href );
        })


}

let village = process.argv[2] ? process.argv[2] : "" ;

village ? vote( village ) : console.log("Usage: node post.js village-name");
