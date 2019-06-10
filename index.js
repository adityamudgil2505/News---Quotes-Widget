require('dotenv').config();
const request = require('request');
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`

request.get(url, (error, response, body)=>{
  console.log(body);
})