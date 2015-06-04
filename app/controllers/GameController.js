// GameController.js
module.exports = function($scope, $http) {
	$scope.loading = true;
    $scope.editMode = false;
    $scope.this = this;

	this.gameTypes = ["Shanghai","Snake","Ox","Ram","Dragon","Rooster","Monkey"];
    
	$http.get('https://mahjongmayhem.herokuapp.com/games/').success(function (data) {
	    $scope.this.games = data;
		$scope.loading = false;
	}).error(function () {
        alert("An Error has occured while loading posts!");
        $scope.loading = false;
    });

	$http.get('https://mahjongmayhem.herokuapp.com/games/5541fc5b1872631100678bb4/tiles/').success(function (data) {
	    $scope.this.tiles = data;
		$scope.loading = false;
	}).error(function () {
        alert("An Error has occured while loading posts!");
        $scope.loading = false;
    });
 
    $scope.toggleEdit = function() {
        $scope.editMode = !$scope.editMode;
    };
 
    $scope.save = function() {
        $http.pull('/api/posts/', $scope.posts).success(function (data) {
            alert("Saved Successfully!!");
        }).error(function (data) {
            $scope.error = "An Error has occured while Saving posts! " + data;
            $scope.loading = false;
        });
    };

	this.addPlayer = function(game, player) {
		game.players[game.players.length] = player;
	}

	this.addGame = function(game, player) {
		if(game != null) {
			var time = new Date();
			layout = game.layout;
			template = {
				_id: layout,
				__v: 0,
				id: layout
			}
			this.games[this.games.length] = 
			{
			 gameTemplate: template,
			 createdOn: time.toString(), 
			 startedOn: "",
			 endedOn: "",
			 createdBy: player,
			 minPlayers: 1,
			 maxPlayers: game.maxPlayers,
			 players: [player],
			 state: "open"
			}
		}

	}

	/*this.myMethodForTest = function(name) {
		return 'Hi ' + name + '!';
	}*/
}