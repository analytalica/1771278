var fs = require('fs');

module.exports = function() {
    if(process.argv.length > 2) {
        if(fs.existsSync(process.argv[2])) {
	        console.log(fs.readFileSync(process.argv[2], 'utf8'));
        } else {
	        console.log('Could not read file: ' + file);
        }
    }
}
