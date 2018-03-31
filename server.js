const express = require("express");
const app = express();
const request = require('request');
let APIdata;

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});

request('https://randomuser.me/api/?nat=us&results=42', function (error, response, body) {
  if (error) {
    console.log('Error:', error); // Print the error if one occurred
  } else {
    APIdata = body;
  }
});


app.use(express.static(__dirname + '/dist'));

app.get('/users', (request, response) => {
  response.status(200).json({
    message: 'Success!',
    obj: APIdata
  });
});


app.all('*', (request, response) => {
  response.status(200).sendfile(__dirname + '/dist/index.html');
});

app.listen(process.env.PORT || 8080, () => {
  console.log("Server is running");
});
