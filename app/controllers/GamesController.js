// GamesController.js
module.exports = function($scope, $http, GameFactory, AuthFactory) {

	$scope.pageSize = 10; // Aantal item op pagina, niet verder geimplementeerd
	$scope.pageIndex = 1; // Huidige pagina, niet verder geimplementeerd
	$scope.maxSize = 5; // Maximaal aantal paginas laten zien in pagination, niet verder geimplementeerd


	getGames();


	$scope.isLoggedIn = function(){
		return AuthFactory.isLoggedIn();
	}

	$scope.getUsername = function(){
    	return AuthFactory.getUsername();
    }

	$scope.joinGame = function(gameId){
		GameFactory.postGamePlayers(gameId).success(function (_response){
			getGames();
		});
	}

	$scope.startGame = function(gameId){
		GameFactory.postGameStart(gameId)
		.success(function (response){
			alert("Game is started");
			getGames();

		})
		.error(function (response){
			alert(response.message);
		});
	}

	function getGames(queryName, queryValue){
		GameFactory.getGames($scope.pageSize, $scope.pageIndex, queryName, queryValue).success(function (response, status, headers, config){
	        $scope.games = response;
	    });
    }

	$scope.postGame = function(game){
		GameFactory.postGame(game)
		.success(function (response){
	        alert("Game is saved");
	        return true;
	    })
	    .error(function (response){
	        alert("Something went wrong..");
	        return false;
	    })
	};
}