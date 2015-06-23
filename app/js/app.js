require('angular/angular');
require('angular-ui-router/build/angular-ui-router');

var ngStorage = require('ngstorage/ngStorage');
var uiBootstrap = require('angular-bootstrap');

// Create your app
var app = angular.module("AdvJS", ['ui.router', 'ngStorage', 'ui.bootstrap']);

// //Factories
var gameFactory = require("./../factories/GameFactory");
var gameTemplateFactory = require('./../factories/GameTemplateFactory.js');
var authFactory = require('./../factories/AuthFactory.js');
app.factory("GameFactory", gameFactory);
app.factory('GameTemplateFactory', gameTemplateFactory);
app.factory('AuthFactory', authFactory);

//Controllers
var gamesController = require("./../controllers/GamesController");
var gameController = require("./../controllers/GameController");
var userController = require("./../controllers/UserController");

app.controller("GamesController", gamesController);
app.controller("GameController", gameController);
app.controller("UserController", userController);

//Directives
var tileDirective = require('./../directives/TileDirective.js');

app.directive('tile', tileDirective);


app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  // $locationProvider.html5Mode(true);

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