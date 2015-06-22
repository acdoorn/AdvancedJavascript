// GamesController.js
module.exports = function($scope, $http, GameFactory, AuthFactory) {

	$scope.pageSize = 10; // Aantal item op pagina
	$scope.pageIndex = 1; // Huidige pagina
	$scope.totalGames = 1; // Aantal games
	$scope.maxSize = 5; // Maximaal aantal paginas laten zien in pagination

	$scope.filters = GameFactory.getFilters(AuthFactory.getUsername());
	$scope.selectedFilter = $scope.filters[0];

	getGames();

	$scope.changeFilter = function(){
		getGames($scope.selectedFilter.queryName, $scope.selectedFilter.queryValue);
	}

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

	$scope.setPage = function (pageNo) {
		$scope.currentPage = pageNo;
	};

	$scope.pageChanged = function() {
		getGames($scope.selectedFilter.queryName, $scope.selectedFilter.queryValue);
	};

	function getGames(queryName, queryValue){
		GameFactory.getGames($scope.pageSize, $scope.pageIndex, queryName, queryValue).success(function (response, status, headers, config){
	        $scope.games = response;
	        $scope.totalGames = headers('X-Total-Count');
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