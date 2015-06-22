require('angular/angular');
require('angular-route/angular-route');
require('angular-ui-router/build/angular-ui-router');

// Create your app
var app = angular.module("AdvJS", ['ui.router', 'ngRoute']);

//Auth

// //Factory
var gameFactory = require("./../factories/gameFactory");
app.factory("gameFactory", gameFactory);

//Controllers
var gamesController = require("./../controllers/GamesController");
var gameController = require("./../controllers/GameController");
var userController = require("./../controllers/UserController");

app.controller("GamesController", gamesController);
app.controller("GameController", ['$scope','$http','$routeParams', gameController]);
app.controller("UserController", userController);

//Models

app.config(function($stateProvider, $httpProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "../views/index.html"
    })
    .state('gameList', {
      url: "/games",
      templateUrl: "../views/gameList.html",
      controller: "GamesController as console"
    })
    .state('game', {
      url: "/games/:gameId",
      templateUrl: "../views/game.html",
      controller: "GameController as console"
    })
});