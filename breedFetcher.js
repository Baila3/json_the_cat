const request = require('request');
arg = process.argv.slice(2)
request(`https://api.thecatapi.com/v1/breeds/search?q=${arg}`, (error, response) => {
  console.error("error:", error)
  const data = JSON.parse(response.body);
  if (data.length !== 0){
    return console.log(data[0].description)
  } 
   return console.log("No breeds found")
});

