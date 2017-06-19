describe('GamesController', function() {

  // Dummy data
  var game = {"_id":"55dc70d4311e9311004707d9","createdBy":{"_id":"ac.vandoorn@student.avans.nl","name":"Alexander van Doorn","__v":0},"createdOn":"2015-08-25T13:42:44.064Z","gameTemplate":{"_id":"Dragon","__v":0,"id":"Dragon"},"__v":0,"players":[{"_id":"ac.vandoorn@student.avans.nl","name":"Alexander van Doorn","__v":0}],"maxPlayers":1,"minPlayers":1,"state":"open","id":"55dc70d4311e9311004707d9"};

  beforeEach(module('AdvJS'));

  var $httpBackend,
    $controller,
    GameFactory,
    GameTemplateFactory,
    AuthFactory,
    stateParams;

  beforeEach(inject(function($rootScope, _$httpBackend_, _$controller_, _GameFactory_, _AuthFactory_){
    $controller = _$controller_;
    $httpBackend = _$httpBackend_;
    GameFactory = _GameFactory_;
    AuthFactory = _AuthFactory_; 
    scope = $rootScope.$new();

    // Override alle requesten om zo de controller juist te testen
    httpBackend = $httpBackend;
    httpBackend.when("POST", "https://mahjongmayhem.herokuapp.com/games/").respond(game);
    httpBackend.when("GET", "https://mahjongmayhem.herokuapp.com/games/?pageSize=30&pageIndex=0").respond(game);

    // Maak controller aan met benodigheden
    var GamesController = $controller('GamesController', {
        $scope: scope,
        $stateParams: {},
        GameFactory: GameFactory
    });

  }));

  it('Add game', function(done){
    var gameIsAdded;
    
    var newGame = {
        "templateName": "Dragon",
        "minPlayers": 1,
        "maxPlayers": 1
    };

    GameFactory.postGame(newGame).then(function (response){
      gameIsAdded = response.data;
    })
    httpBackend.flush();

    
    

    setTimeout(function(){
      
      expect(gameIsAdded).to.have.property("_id");
      expect(gameIsAdded).to.have.property("createdBy");
      expect(gameIsAdded).to.have.property("createdOn");
      console.log("New game added with id: ", gameIsAdded._id);
      done();
    }, 1500);

  });

});