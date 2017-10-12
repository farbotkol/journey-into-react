const express = require('express');
const _ourController = require('./controllers/_our-controller');
const users = require('./controllers/users');

module.exports = function(app) {
  const apiRoutes = express.Router();

  //routes will go here
  apiRoutes.get('/helloworld', _ourController.helloworld);
  apiRoutes.get('/IsLukeAwesome', _ourController.IsLukeAwesome);
  apiRoutes.get('/AllUsers', users.list);

  app.use('/api', apiRoutes);
}
