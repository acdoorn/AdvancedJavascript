//TileDirective.js
var TileDirective = function(){

	return {
		restrict: 'E',
		templateUrl: '',
		controller: function($scope){
		},
		link: function(scope, element, attrs){
			var tile = scope.tile;
			if(tile.tile !== undefined){
				element.addClass(tile.tile.suit.toLowerCase() + '-' + tile.tile.name.toLowerCase());
			}
			else {
				element.addClass('empty'); // template
			}
			console.log(tile);
			var top = tile.yPos * 24.5 - (tile.zPos * 4);
			var left = tile.xPos * 18 + (tile.zPos * 3); 
			var zIndex = tile.zPos * 3 + tile.yPos;
			element.css({
	  			"left":  + left + 'px',
	  			"top":  + top +'px',
	  			"z-index": zIndex
	  		});

		}
	}

};

module.exports = TileDirective;