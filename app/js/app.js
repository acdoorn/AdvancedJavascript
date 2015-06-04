
require('angular/angular')
require('angular-route/angular-route');
// Create your app
var app = angular.module('AdvJS', ['ngRoute']);
var gamesController = require('../controllers/GamesController');
var gameController = require('../controllers/GameController');
var userController = require('../controllers/userController');

app.config(function($routeProvider) {
    $routeProvider.
      when('/games', {
        templateUrl: '../views/index.html',
        controller: gamesController
      }).
      when('/games/:gameId', {
        templateUrl: '../views/game.html',
        controller: gameController
      }).
      otherwise({
      	redirectTo: '/'
      });
    });


app.controller('GamesController', gamesController);
app.controller('GameController', gameController);
app.controller('UserController', userController);