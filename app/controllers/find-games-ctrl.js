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
	.controller("findGamesCtrl", ["$firebaseArray", "getGamesFac", function($firebaseArray, getGames) {
		this.gamesArr = [];
		this.searchInput = "";

		this.searchGames = function () {
			console.log("clicked");
	    getGames.getGames(this.searchInput).then(function(data) {
	    	console.log(data.results);
	    	this.gamesArr = data.results;
	    	console.log(this.gamesArr);
	    }.bind(this));
	  }.bind(this);
	
	}]);
});