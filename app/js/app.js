require('angular/angular');
require('angular-route/angular-route');
require('angular-ui-router/build/angular-ui-router');
require('jquery/dist/jquery');
// require('bootstrap/dist/js/ bootstrap');

// Create your app
var app = angular.module("AdvJS", ['ui.router', 'ngRoute']);

//Auth

// //Factories
// var urlFactory = require("./factories/urlFactory");
// var loginFactory = require("./factories/loginFactory");
var gameFactory = require("./../factories/gameFactory");

// var gameService = require("./services/gameService");

// app.factory("urlFactory", urlFactory);
app.factory("gameFactory", gameFactory);
// app.factory("loginFactory", loginFactory);

// app.service("gameService", gameService);

//Controllers
var gamesController = require("./../controllers/GamesController");
var gameController = require("./../controllers/GameController");
// var loginController = require("./controllers/LoginController");
var userController = require("./../controllers/UserController");
// var callbackController = require("./controllers/CallbackController");

app.controller("GamesController", gamesController);
app.controller("GameController", ['$scope','$http','$routeParams', gameController]);
// app.controller("loginController", loginController);
app.controller("UserController", userController);
// app.controller("callbackController", callbackController)

//Models
// var game = require("./models/game");

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


// app.directive('tile', function() {
//   return {
//     restrict: 'E',
//     templateUrl: './views/directives/tileTemplate.html',
//     controller: function($scope) {
//     },
//     link: function(scope, element, attrs) {
//     }
//   }
// });

// app.directive('game', function() {
//   return {
//     restrict: 'E',
//     templateUrl: './views/directives/gamesViews/game.html',
//   }
// });

// app.directive('creategame', function() {
//   return {
//     restrict: 'E',
//     templateUrl: './views/directives/gamesViews/creategame.html',
//   }
// });

// app.directive('user', function(){
//   return {
//     restrict: 'E',
//     templateUrl:'./views/directives/user.html',
//     controller: "UserController as uc"
//   }
// });