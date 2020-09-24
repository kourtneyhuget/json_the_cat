const request = require('request');

const argument = process.argv.slice(2);
const urlInput = "https://api.thecatapi.com/v1/breeds/search?q=" + argument[0];

request(urlInput, (error, response, body) => {
  const data = JSON.parse(body);
  if (error) {
    console.log("Failed to make request");
    process.exit;
  } else if (data.length === 0) {
    console.log("Requested breed not found");
  } else {
    console.log(data[0].description);
  }
});
