const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response) => {
    const data = JSON.parse(response.body);
    if (data.length !== 0) {
      return console.log(data[0].description)
    }
    callback("error:", error)
    // return console.log("No breeds found");
  });
};

module.exports = { fetchBreedDescription };

