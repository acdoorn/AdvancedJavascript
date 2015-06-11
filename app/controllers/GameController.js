// GameController.js
module.exports = function($scope, $http, $routeParams) {
	$scope.loading = true;
    $scope.editMode = false;
    $scope.this = this;
    $scope.this.gameId = '5541fc5b1872631100678bb4';

	$http.get('https://mahjongmayhem.herokuapp.com/games/5541fc5b1872631100678bb4/tiles/').success(function (data) {
	    $scope.this.tiles = data;
		$scope.loading = false;
	}).error(function () {
        alert("An Error has occured while loading the game!");
        $scope.loading = false;
    });
}