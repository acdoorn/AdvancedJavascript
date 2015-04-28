
require('angular/angular');

// Create your app
var app = angular.module('AdvJS', []);
var gameController = require('../controllers/GameController');

app.controller('GameController', gameController);