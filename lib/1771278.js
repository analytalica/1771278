var fs = require('fs');

module.exports = function(filename) {
    if(fs.existsSync(filename)) {
	    console.log(fs.readFileSync(filename, 'utf8'));
    } else {
	    console.log('Could not read file: ' + file);
    }
}
