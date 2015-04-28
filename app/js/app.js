
require('angular/angular');

// Create your app
var app = angular.module('AdvJS', []);
var gameController = require('../controllers/GameController');
var userController = require('../controllers/userController');

app.controller('GameController', gameController);
app.controller('UserController', userController);