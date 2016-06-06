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
			var top = tile.yPos * 22.5 + (tile.zPos *5);
			var left = tile.xPos * 18 + (tile.zPos *2);
			var shadow = tile.zPos * 3;
			element.css({
	  			"left":  + left + 'px',
	  			"top":  + top +'px',
	  			"z-index": tile.zPos,
	  			"box-shadow": shadow + 'px 0px ' + shadow + 'px'
	  		});

		}
	}

};

module.exports = TileDirective;