// UserController.js
module.exports = function($scope, $location, AuthFactory) {

	var location = $location.search();
	// If route parameters are set, so user returned from Avans auth
	if(location.username && location.token){
		AuthFactory.setCredentials(location.username, location.token);
	}

	$scope.isLoggedIn = function(){
		return AuthFactory.isLoggedIn();
	}

    $scope.signOut = function(){
        AuthFactory.clearCredentials();
    }

    $scope.getUsername = function(){
    	return AuthFactory.getUsername();
    }
}