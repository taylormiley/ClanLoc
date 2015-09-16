define([
	"angular",
	"angularRoute",
	"firebase",
	"bootstrap", 
], function(angular, angularRoute, firebase, bootstrap) {
	angular.module("ClanLocApp.findGames", ["ngRoute"])
	.config(["$routeProvider", function($routeProvider) {
		$routeProvider.when("/game", {
			templateUrl: "../partials/game.html",
			controller: "findGamesCtrl",
			controllerAs: "findGames"
		});
	}])
	.controller("findGamesCtrl", ["$firebaseArray", "getGames", function($firebaseArray, getGames) {
    getGames.getGames().then(function(data) {
    	console.log(data);
    });
	
	}]);
});