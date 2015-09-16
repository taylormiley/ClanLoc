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
			controller: "gameCtrl",
			controllerAs: "game"
		});
	}])
	.controller("findGamesCtrl", ["$firebaseArray", function($firebaseArray) {

	
	}]);
});