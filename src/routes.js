const express = require('express');
const routes = express.Router();
const UserController = require('./Controllers/UserController');

routes.post('/user', UserController.store);
routes.get('/user', UserController.show);
routes.delete('/user/:id', UserController.delete);



module.exports = routes;
