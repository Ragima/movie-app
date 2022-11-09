const fs = require('fs');

const temp = fs.existsSync('resources.txt');

module.exports = {
  connectionString: fs.readFileSync('resources.txt', 'utf8', (e) => console.log('e', e)),
};

