'use strict';

var app = angular.module('myApp', [
	'ngRoute',
	'myApp.home',
	'firebase'
]);

app.controller('myCtrl', function ($scope) {
	$scope.name = "Jason";
	$scope.user = {
		name: "Romero"
	}});

app.controller('myNestedCtrl', function ($scope) {
});


/*
// Declared route 
	app.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.otherwise({
			redirectTo: '/home'
		});
*/