describe("Factory tests", function() {
	var scope,
		$controller,
		GamesFactory;

	// initialize the app
	beforeEach(module('AdvJS'));

	beforeEach(inject(function($rootScope, _$controller_, _GameFactory_){
		$controller = _$controller_;
		GameFactory = _GameFactory_;
		scope = $rootScope.$new();
	}));

	it('Should replace a method on the factory and expect not calling', function() { 
		// Creëer een personController, geef de dependencies aan de constructor by name mee
		var gamesController = $controller('GamesController', {
			$scope: scope, 
			gameFactory: GameFactory,
			retreivedGames: {}
		 });
		
		// Vervang de methode door een stub (in plaats van een nieuwe functie)
		// Hierdoor kunnen we expects gaan doen
		GameFactory.postGame = sinon.stub();

		scope.joinGame(undefined);

		// Omdat het een stub is, heeft het veel methodes om te zien of het aangeroepen is.
		// Zie http://sinonjs.org/docs/
		assert(GameFactory.postGame.notCalled);
	});
});