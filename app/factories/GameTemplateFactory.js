//GameTemplateFactory.js
module.exports = function($http){
	var factory = {};

	var base_url = 'https://mahjongmayhem.herokuapp.com/gametemplates/';

	factory.getGameTemplates = function(){
		return $http.get(base_url);
	}

	factory.getGameTemplate = function(name){
		return $http.get(base_url + name);
	}

	return factory;
};