//Describe: maakt niet uit welke naam -> dit is je test set

describe("GameController", function() {
	var gameController;
	var userController;
	var scope;

	beforeEach(module('AdvJS')); // Altijd hetzelfde

	beforeEach(inject(function($rootScope, $controller){
		scope = $rootScope.$new();
		gameController = $controller('GameController', { $scope: scope });
		userController = $controller('UserController', { $scope: scope });
	}));

	it('should add a new game', function(){
		var oldGames = gameController.games.length; //Aantal games
		
		//Benodigde data om een game te starten -----
		var game = {	
			layout: "Snake",
			maxPlayers: 6
		};
		var player = userController.user;
		//-------------------------------------------

		//Nieuwe game toevoegen met de benodigde data
		gameController.addGame(game, player);
		//Lengte van de games opnieuw zetten (als het goed is met 1 opgehoogd)
		var newGames = gameController.games.length; 

		expect(newGames).to.equal((oldGames+1));
	});

	it('should add a player to a game', function(){
		var gameInArray = 3;
		//Benodigde data om een game te starten -----
		var game = gameController.games[gameInArray];
		var player = userController.user;
		//-------------------------------------------

		//Toevoegen van speler
		gameController.addPlayer(game, player);

		//data van nieuwste speler ophalen
		var newestPlayer = gameController.games[gameInArray].players[gameController.games[gameInArray].players.length-1];

		//Vergelijk id nieuwste speler met de toegevoegde
		console.log("Player: " + player);
		console.log("New Player: " + newestPlayer);
		console.log("expect("+newestPlayer.id+").to.equal("+player.id+")");
		expect(newestPlayer.id).to.equal(player.id);
	});

	/*it('should return the right welcome message', function(){
		var message = gameController.myMethodForTest('Martijn');

		expect(message).to.equal('Hi Martijn!');
	});*/

	it('should return the right id', function(){
		var user = userController.user;
		expect(user.id).to.equal('rdaelen');
	});


});