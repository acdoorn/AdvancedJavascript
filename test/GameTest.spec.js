describe("GamesController test", function() {
	var gamesController;
	var gameFactory;
	var scope;
	
	// initialize the app
	beforeEach(module('AdvJs'));

	// Inject the modules and get them in global variables
	beforeEach(inject(function($rootScope, $controller, $injector){
		// The scope for the controller
		scope = $rootScope.$new();
		// Get the service which will be injected
		gameFactory = $injector.get('gameFactory');
		
		
		// Stubbing with sinon
		gameFactory.getTiles = function(id, callback) {
			//callback([tils]);
			callback(tiles);
		};
		gamesController = $controller('GamesController', { $scope: scope, gameFactory: gameFactory });
	}));
});