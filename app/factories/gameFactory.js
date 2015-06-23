//GameFactory.js
module.exports = function($http){
    var _ = require('../assets/js/underscore');
    var factory = {};

    var base_url = 'https://mahjongmayhem.herokuapp.com/games/';

    // Retourneert een collectie van games in de volgende structuur
    factory.getGames = function(pageSize, pageIndex, name, value){
        pageIndex = pageIndex-1;

        if(name && value){
            
            return $http.get(base_url + '?' + name + '=' + value + '&pageSize=' + pageSize + '&pageIndex=' + pageIndex);
        }
        else {
            return $http.get(base_url + '?pageSize=' + pageSize + '&pageIndex=' + pageIndex);
        }
    }

    // Voegt een game toe
    factory.postGame = function(game){
        return $http.post(base_url, game);
    }

    // Geeft een object terug zoals gegeven in /Games
    factory.getGame = function(id){
        return $http.get(base_url + id);
    }

    // Post een leeg object om een game te starten.
    factory.postGameStart = function(id){
        return $http.post(base_url + id + '/start');
    }

    // Geeft een collectie van players terug in deze game. (Zie de players in de GET van /Games)
    factory.getGamePlayers = function(id){
        return $http.get(base_url + id + '/players');
    }

    // Join een game. Geef geen body mee (wordt aan de hand van de login gedaan)
    factory.postGamePlayers = function(id){
        return $http.post(base_url + id + '/players');
    }

    // Geeft een array van tegels terug die in die game zitten
    factory.getGameTiles = function(id, matched){
        _matched = matched ? 'true' : 'false';
        return $http.get(base_url + id + '/tiles?matched=' + _matched);
    }

    // Geeft een array van tegels terug die in die game zitten
    factory.getGameTilesMatches = function(id){
        return $http.get(base_url + id + '/tiles/matches');
    }

    factory.postGameTilesMatches = function(id, tiles){
        return $http.post(base_url + id + '/tiles/matches', tiles);
    }

    factory.compareTiles = function(tile1, tile2){
        if(tile1.tile.suit == tile2.tile.suit){

            if(tile1.tile.matchesWholeSuit == false || tile2.tile.matchesWholeSuit == false){
                if(tile1.tile.name == tile2.tile.name){
                    return true;
                } else {
                    return false;
                }
            } else {
                return true;
            }   
        } else {
            return false;
        }
    }

    factory.isTileSelectable = function(tiles, tile){
        var x = tile.xPos;
        var y = tile.yPos;
        var z = tile.zPos;

        if(blockedByTileOnLeftOrRight(tiles, tile) || blockedByTileOnTop(tiles, tile) || blockedByTileAboveOrBelow(tiles, tile)){
            return false;
        }

        return true;
    }

    // Returns alle tegels die selecteerbaar zijn
    factory.tilesSelectable = function(tiles){
        var tilesSelectable = [];

        angular.forEach(tiles, function(tile) {
            if(factory.isTileSelectable(tiles, tile)){
                tilesSelectable.push(tile);
            }
        });
        return tilesSelectable;
    }

    factory.isMatchAvailable = function(tiles){
        tilesSelectable = factory.tilesSelectable(tiles);

        for (i = 0; i < tilesSelectable.length; i++) { 
            for (j = 0; j < tilesSelectable.length; j++) { 
                if((tilesSelectable[i]._id != tilesSelectable[j]._id) &&
                    (factory.compareTiles(tilesSelectable[i], tilesSelectable[j])))
                {
                    return true;
                }
            }
        }
        return false;
    }

    function blockedByTileOnLeftOrRight(tiles, tile){
        var x = tile.xPos;
        var y = tile.yPos;
        var z = tile.zPos;

        if(    ((_.findWhere(tiles, {xPos: x + 2, yPos: y, zPos: z}))
            || (_.findWhere(tiles, {xPos: x + 2, yPos: y + 1, zPos: z}))
            || (_.findWhere(tiles, {xPos: x + 2, yPos: y - 1, zPos: z})))
            && ((_.findWhere(tiles, {xPos: x - 2, yPos: y, zPos: z}))
            || (_.findWhere(tiles, {xPos: x - 2, yPos: y + 1, zPos: z}))
            || (_.findWhere(tiles, {xPos: x - 2, yPos: y - 1, zPos: z})))
         ){
            console.log('Blocked by tile on left or right');
            return true;
        }

        return false;
    }

    function blockedByTileAboveOrBelow(tiles, tile){
        var x = tile.xPos;
        var y = tile.yPos;
        var z = tile.zPos;

        if(    ((_.findWhere(tiles, {xPos: x, yPos: y + 2, zPos: z}))
            || (_.findWhere(tiles, {xPos: x + 1, yPos: y + 2, zPos: z}))
            || (_.findWhere(tiles, {xPos: x - 1, yPos: y + 2, zPos: z})))
            && ((_.findWhere(tiles, {xPos: x , yPos: y - 2, zPos: z}))
            || (_.findWhere(tiles, {xPos: x + 1, yPos: y - 2, zPos: z}))
            || (_.findWhere(tiles, {xPos: x - 1, yPos: y - 2, zPos: z})))
         ){
            console.log('Blocked by tile above or below');
            return true;
        }

        return false;
    }

    function blockedByTileOnTop(tiles, tile){
        var x = tile.xPos;
        var y = tile.yPos;
        var z = tile.zPos + 1;

        if(    (_.findWhere(tiles, {xPos: x, yPos: y, zPos: z})) // top
            || (_.findWhere(tiles, {xPos: x + 1, yPos: y, zPos: z})) // right half
            || (_.findWhere(tiles, {xPos: x - 1, yPos: y, zPos: z})) // left half
            || (_.findWhere(tiles, {xPos: x, yPos: y + 1, zPos: z})) // bottom half
            || (_.findWhere(tiles, {xPos: x, yPos: y - 1, zPos: z})) // top half
            || (_.findWhere(tiles, {xPos: x + 1, yPos: y + 1, zPos: z})) // bottom right corner
            || (_.findWhere(tiles, {xPos: x + 1, yPos: y - 1, zPos: z})) // top right corner
            || (_.findWhere(tiles, {xPos: x - 1, yPos: y + 1, zPos: z})) // bottom left cornor
            || (_.findWhere(tiles, {xPos: x - 1, yPos: y - 1, zPos: z})) // top left cornor
        ){
            console.log('Blocked by tile on top');
            return true;
        }

        return false;
    }

    return factory;
};