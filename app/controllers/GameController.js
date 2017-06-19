// GameController.js

'use strict';
module.exports = function($scope, $http, $stateParams, GameFactory, GameTemplateFactory, AuthFactory) {
	$scope.loading = true;
    $scope.editMode = false;
    $scope.this = this;


    var _ = require('../assets/js/underscore');

    $scope.selectedTile = null;
    $scope.tilesMatches = [];

    getGame();
    getGameTiles(false); //Get unmatched tiles
    getGameTiles(true); //Get matched tiles

    $scope.isLoggedIn = function(){
        return AuthFactory.isLoggedIn();
    }

    /* Check if user is part of current game */
    $scope.isPlaying = function(){

        if(_.findWhere($scope.game.players, {_id: AuthFactory.getUsername()})){
            return true;
        }
        return false;
    }

    $scope.getMatchesByUser = function(userId){
        getGameTilesMatchesByUser(userId);
    }

    $scope.matchTile = function(tile){

        console.log(tile.tile.suit + " " + tile.tile.name + " ("+tile.tile._id+")");

        if(GameFactory.isTileSelectable($scope.tiles, tile)){
            if($scope.selectedTile == null || $scope.selectedTile == tile){
                $scope.selectedTile = tile;
            }
            else{

                if(GameFactory.compareTiles($scope.selectedTile, tile)){

                    // Remove selected tiles from $scope.tiles
                    $scope.tiles = _.without($scope.tiles, $scope.selectedTile);
                    $scope.tiles = _.without($scope.tiles, tile);

                    GameFactory.postGameTilesMatches($stateParams.gameId, {tile1Id: $scope.selectedTile._id, tile2Id: tile._id})
                        .then(function successCallback(response){
                            //annoying when testing
                            //alert("Twee tegels gematched!");
                            console.log("MATCH!");
                            getGameTiles(false);
                            getGameTiles(true);
                            if(!GameFactory.isMatchAvailable) {
                                alert("Geen matches meer mogelijk!");
                            }
                        }, function errorCallback(response){
                            alert("Dit is geen goedgekeurde match");
                            console.log(response.message);
                        });
                }
                else {
                    alert("Dit is geen goedgekeurde match");
                }

                $scope.selectedTile = null;
            }
        }
    }

    function getGame(){
        GameFactory.getGame($stateParams.gameId).then(function (_response){
                console.log(_response.data); 
            $scope.game = _response.data;

            // Get game template
            GameTemplateFactory.getGameTemplate(_response.data.gameTemplate._id).then(function (response){
                console.log(response.data);
                $scope.template = response.data;
            });
        });
    }

    function getGameTiles(matched){
        GameFactory.getGameTiles($stateParams.gameId, matched).then(function (response){ 
            if(matched){
                $scope.matchedTiles = response.data;
            }
            else {
                $scope.tiles = response.data;
            }
        });
    }

    function getGameTilesMatchesByUser(userId){
        GameFactory.getGameTilesMatches($stateParams.gameId).then(function (response){
            
            $scope.tilesMatches = [];

            for (var key in response.data) {
              if (response.hasOwnProperty(key)) {

                if(response.data[key].match.foundBy == userId){
                    $scope.tilesMatches.push(response[key]);
                }

              }
            }
        });
    }

    $scope.isMatchAvailable = function(){
        if(GameFactory.isMatchAvailable($scope.tiles)){
            alert('Er is nog minstens 1 match over');
        } else {
            alert('Geen matches meer mogelijk');
        }
    }
};