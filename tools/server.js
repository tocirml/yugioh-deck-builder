//I found this code, while fiding how to run a simple js app with Heroku, using express

// create an express app
const express = require('express');
const app = express();
var fallback = require('express-history-api-fallback');
const path = require('path');
const publicPath = path.join(__dirname, '..', 'build');

const port = process.env.PORT || 3000;

// use the express-static middleware
app.use(express.static(publicPath));
app.use(fallback('/index.html', { root: publicPath }));

// define the first route
app.get('/', function (req, res) {
  res.sendFile('/index.html', { root: publicPath });
});

// app.get('*', (req, res) => {
//   res.sendFile('index.html');
// });

// app.use(history());

// start the server listening for requests
app.listen(port, () => console.log(`Server is running on ${port}`));
