// GamesController.js
module.exports = function($scope, $http, GameFactory, AuthFactory, $state) {

	$scope.pageSize = 30; // Aantal item op pagina, niet verder geimplementeerd
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
		GameFactory.postGamePlayers(gameId).then(function (_response){
			getGames();
		});
	}

	$scope.setGameStateFilter = function(gameState){
		$scope.gameStateFilter = gameState;
	}

	$scope.startGame = function(gameId){
		GameFactory.postGameStart(gameId)
		.then(function successCallback(response){
			alert("Game is started");
			getGames();
			$state.go($state.current, {}, {reload:true});

		}, function errorCallback(response){
	        alert(response.message);
	    });
	}

	$scope.showGame = function(gameId) {
		window.location.replace("http://localhost:8080/dist/views/#/games/" + gameId);
	};

	function getGames(queryName, queryValue){
		GameFactory.getGames($scope.pageSize, $scope.pageIndex, queryName, queryValue).then(function (response, status, headers, config){
	        $scope.games = Object.values(response)[0];
	    });
    }

	$scope.postGame = function(game){
		GameFactory.postGame(game)
		.then(function successCallback(response){
			$state.go($state.current, {}, {reload:true});
	        return true;
	    }, function errorCallback(response){
	        alert("Something went wrong..");
	        return false;
	    });
	};
}