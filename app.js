const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// load routes
const ColorsRoutes = require('./routes/color.route');
const IndexRoute = require('./routes/index.route');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Configure Header HTTP
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
      'Access-Control-Allow-Headers',
      'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method',
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use(`/api/`, ColorsRoutes);
app.use(`/api/`, IndexRoute);

module.exports = app;
