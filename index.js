require('dotenv').config();
const request = require('request');
const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.API_KEY}`

const title = document.getElementById("title");
const description = document.getElementById("description")

request.get(url, (error, response, body)=>{
  body = JSON.parse(body);
  title.innerHTML = body.articles[0].title;
  description.innerHTML = body.articles[0].description;
})