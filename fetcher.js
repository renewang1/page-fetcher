const request = require('request');
const fs = require('fs');

const site = process.argv.slice(2)[0];
const path = process.argv.slice(2)[1];


request(site, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  fs.appendFile(path, body, (err) => {
    if (err) throw err;
    fs.stat(path, (err, stats) => {
      if (err) throw err;
      console.log(`Downloaded and saved ${stats.size} bytes to ${path}`);
    });
  });
});
