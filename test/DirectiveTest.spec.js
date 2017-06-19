describe("TileDirective test", function() {
	var compile, scope, element;

	var tile = {"_id":"5947b0f9d34a0200114b5ef7","tile":{"_id":102,"id":"102","matchesWholeSuit":false,"name":"8", "suit":"Character", "__v":0}, "xPos":13, "yPos":4, "zPos":0};

	// initialize the app
	beforeEach(module('AdvJS'));
  
  	
	beforeEach(inject(function($compile, $rootScope){
    	compile = $compile;
    	scope = $rootScope.$new();
  	}));
  
	beforeEach(function(){
  		element = getCompiledElement();
	});

	function getCompiledElement(){
  		var element2 = angular.element('<tile></tile>');
  		scope.tile = tile;
  		var compiledElement = compile(element2)(scope);
  		scope.$digest();
  		return compiledElement;
	}

	it('should have have the correct values and form', function () {
  		var compareValue = angular.element('<tile></tile>');
			if(tile.tile !== undefined){
				compareValue.addClass('ng-scope'); // template
				compareValue.addClass(tile.tile.suit.toLowerCase() + '-' + tile.tile.name.toLowerCase());
			}
			else {
				compareValue.addClass('empty'); // template
			}
			var top = tile.yPos * 24.5 - (tile.zPos * 4);
			var left = tile.xPos * 18 + (tile.zPos * 3); 
			var zIndex = tile.zPos * 3 + tile.yPos;
			compareValue.css({
	  			"left":  + left + 'px',
	  			"top":  + top +'px',
	  			"z-index": zIndex
	  		});

  		expect(element[0].toString()).to.equal(compareValue[0].toString());
	});

});