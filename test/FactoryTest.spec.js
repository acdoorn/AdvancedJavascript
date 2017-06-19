describe("Factory tests", function() {
	var scope,
		$controller,
		GamesFactory,
		AuthFactory,
		location;

	// initialize the app
	beforeEach(module('AdvJS'));

	beforeEach(inject(function($rootScope, _$controller_, $location, _GameFactory_, _AuthFactory_, _GameTemplateFactory_){
		$controller = _$controller_;
		GameFactory = _GameFactory_;
		AuthFactory = _AuthFactory_;
		GameTemplateFactory = _GameTemplateFactory_;
		scope = $rootScope.$new();
		location = $location;
	}));

	it('Should replace a method on the factory and expect not calling', function() { 
		// Creëer een gamesController, geef de dependencies aan de constructor by name mee
		var gamesController = $controller('GamesController', {
			$scope: scope, 
			gameFactory: GameFactory,
			retreivedGames: {}
		 });
		
		// Vervang de methode door een stub (in plaats van een nieuwe functie)
		// Hierdoor kunnen we expects gaan doen
		GameFactory.postGame = sinon.stub();

		scope.joinGame(undefined);
		//scope.startGame(undefined);
		//scope.showGame(undefined);

		// Omdat het een stub is, heeft het veel methodes om te zien of het aangeroepen is.
		// Zie http://sinonjs.org/docs/
		assert(GameFactory.postGame.notCalled);
	});

	it('isLoggedIn should return false when user is not logged in', function() {

		// Creëer een gamesController, geef de dependencies aan de constructor by name mee
		var userController = $controller('UserController', {
			$scope: scope, 
			$location: location,
			authFactory: AuthFactory
		 });


		expect(scope.isLoggedIn()).eq(false);
	});


	it('isLoggedIn should return false after user is logged out', function() {

		// Creëer een gamesController, geef de dependencies aan de constructor by name mee
		var userController = $controller('UserController', {
			$scope: scope, 
			$location: location,
			authFactory: AuthFactory
		 });

		AuthFactory.setCredentials('fakelogin', 'token');

		scope.signOut(); 

		expect(scope.isLoggedIn()).eq(false);
	});


	it('isLoggedIn should return true after user credentials are set', function() {

		// Creëer een gamesController, geef de dependencies aan de constructor by name mee
		var userController = $controller('UserController', {
			$scope: scope, 
			$location: location,
			authFactory: AuthFactory
		 });

		AuthFactory.setCredentials('fakelogin', 'token');

		expect(scope.isLoggedIn()).eq(true);

		scope.signOut(); 
	});


	it('getUsername should return henk after user credentials are set', function() {

		// Creëer een gamesController, geef de dependencies aan de constructor by name mee
		var userController = $controller('UserController', {
			$scope: scope, 
			$location: location,
			authFactory: AuthFactory
		 });

		AuthFactory.setCredentials('henk', 'token');

		expect(scope.getUsername()).eq('henk');

		scope.signOut(); 
	});

});