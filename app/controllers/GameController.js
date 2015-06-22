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
                        .success(function(response){
                            alert("Match! \:\)");
                            console.log("MATCH!");
                            getGameTiles(false);
                            getGameTiles(true);
                        })
                        .error(function(response){
                            alert("Geen match, helaas \:\(");
                            console.log(response.message);
                        });

                }
                else {
                    alert("Geen match, helaas \:\(");
                }

                $scope.selectedTile = null;
            }
        }

    }

    function getGame(){
        GameFactory.getGame($stateParams.gameId).success(function (_response){
            $scope.game = _response;

            // Get game template
            GameTemplateFactory.getGameTemplate(_response.gameTemplate._id).success(function (response){
                $scope.template = response;
            });
        });
    }

    function getGameTiles(matched){
        GameFactory.getGameTiles($stateParams.gameId, matched).success(function (response){
            if(matched){
                $scope.matchedTiles = response;
            }
            else {
                $scope.tiles = response;
            }
        });
    }

    function getGameTilesMatchesByUser(userId){
        GameFactory.getGameTilesMatches($stateParams.gameId).success(function (response){
            
            $scope.tilesMatches = [];

            for (var key in response) {
              if (response.hasOwnProperty(key)) {

                if(response[key].match.foundBy == userId){
                    $scope.tilesMatches.push(response[key]);
                }

              }
            }

        });
    }

    $scope.isMatchAvailable = function(){
        if(GameFactory.isMatchAvailable($scope.tiles)){
            alert('There are some matches left');
        } else {
            alert('No matches possible');
        }
    }

};