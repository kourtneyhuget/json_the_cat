const request = require('request');

function fetchBreedDescription(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    const data = JSON.parse(body);
    data[0] ? callback(null, data[0].description) : callback("Requested breed not found");
  });
};

module.exports = { fetchBreedDescription };