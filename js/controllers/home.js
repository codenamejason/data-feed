'use strict';

angular.module('myHome', [
	'ngRoute',
	'myHome.home'
])
		
	// declared route
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/home', {
			templateUrl: 'home/home.html',
			controller: 'HomeCtrl'
		});
	}]);

		// Home controller
		app.controller('HomeCtrl', [
		function () {
			// authenticate user
			var firebaseObj = new Firebase("https://boiling-fire-4159.firebaseio.com");
		
		app.controller('HomeCtrl', [
				'$scope',
				'$firebaseSimpleLogin',
		]);
	}]);
			// inject firebase login module into HomeCtrl
			function ($scope,$firebaseSimpleLogin) {
			var loginObj = $firebaseSimpleLogin(firebaseObj);
				
				
			$scope.SignIn = function (event) {
    event.preventDefault();  
				// To prevent form refresh
    var username = $scope.user.email;
    var password = $scope.user.password;
     
    loginObj.$login('password', {
            email: username,
            password: password
        })
        .then(function(user) {
            // Success callback
            console.log('Authentication successful');
        }, function(error) {
            // Failure callback
            console.log('Authentication failure');
        });
			}	
			}]);


