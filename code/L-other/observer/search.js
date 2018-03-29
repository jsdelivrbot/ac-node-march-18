
let EventEmitter = require('events').EventEmitter;
let fs = require('fs');

class Search extends EventEmitter {

    constructor ( r ) {
        super();
        this.files = [];
        this.regex = r;
    }

    addFiles( files ) {
        this.files = [...files];
        return this;
    }

    search() {
        this.files.forEach( f => {

             fs.readFile(f, 'utf8', (error, content) => {

                if (error) {
                    return this.emit('error', error);
                }

                let match = content.match(this.regex);
                if( match ) {
                    match.forEach(elem => this.emit('found', f, elem));
                }

             })
        })
        return this;
    }
}

module.exports = Search;
