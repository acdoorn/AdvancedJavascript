//GameTemplateFactory.js
module.exports = function($http){
	var factory = {};

	var base_url = 'https://mahjongmayhem.herokuapp.com/gametemplates/';

	// Retourneert een collectie van gametemplates in de volgende structuur:
	factory.getGameTemplates = function(){
		return $http.get(base_url);
	}

	// Geeft een object terug zoals gegeven in /GameTemplates
	factory.getGameTemplate = function(name){
		return $http.get(base_url + name);
	}

	return factory;
};