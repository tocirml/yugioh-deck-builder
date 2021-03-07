//I found this code, while fiding how to run a simple js app with Heroku, using express

// create an express app
const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.join(__dirname, '..', 'build');

// use the express-static middleware
app.use(express.static(publicPath));

// define the first route
app.get('/', function (req, res) {
  res.send('<h1>Hello World!</h1>');
});

// start the server listening for requests
app.listen(process.env.PORT || 3000, () =>
  console.log('Server is running on http://localhost:3000')
);
