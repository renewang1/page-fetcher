const request = require('request');
const fs = require('fs');

const site = process.argv.slice(2)[0];
const path = process.argv.slice(2)[1];


request(site, (body) => {
  fs.appendFile(path, body, (err) => {
    if (err) throw err;
    fs.stat(path, (err, stats) => {
      if (err) throw err;
      console.log(`Downloaded and saved ${stats.size} bytes to ${path}`);
    });
  });
});
