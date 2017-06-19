//AuthFactory.js
module.exports = function($http, $localStorage){
	var factory = {};

    factory.username = $localStorage.username;
    factory.token = $localStorage.token;

    $http.defaults.headers.common['x-username'] = $localStorage.username;
    $http.defaults.headers.common['x-token'] = $localStorage.token;

	factory.setCredentials = function(username, token) {
		$localStorage.username = username;
        $localStorage.token = token;
        
        $http.defaults.headers.common['x-username'] = username;
        $http.defaults.headers.common['x-token'] = token;

        return true;

    };

    factory.clearCredentials = function() {

        delete $localStorage.username;
        delete $localStorage.token;

        delete $http.defaults.headers.common['x-username'];
        delete $http.defaults.headers.common['x-token'];

        return true;
    };

    factory.isLoggedIn = function() {
        if($localStorage.username && $localStorage.token){
            return true;
        }
        return false;
    }

    factory.getUsername = function() {
        return $localStorage.username;
    }

	return factory;
};
