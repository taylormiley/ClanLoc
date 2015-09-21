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
	.controller("findGamesCtrl", findGamesCtrl); 
	findGamesCtrl.$inject = ["$firebaseArray", "getGamesFac"];
	function findGamesCtrl($firebaseArray, getGamesFac) {
    this.ref = new Firebase("https://clanloc.firebaseio.com/games");
    this.fbGames = $firebaseArray(this.ref);
    this.getGames = getGamesFac;
		this.gamesArr = [];
		this.searchInput = "";
    this.consoleSelect = "";
	}

	findGamesCtrl.prototype.searchGames = function () {
    this.getGames.getGames(this.searchInput).then(function(data) {
    	this.gamesArr = data.results;
    }.bind(this));
  };

  findGamesCtrl.prototype.showInput = function(game) {
    // context.game.addValue = true;
    console.log(game.addValue);
    if (game.addValue === undefined) {
      game.addValue = true;
    } else if (game.addValue === true) {
      game.addValue = false;
    } else if (game.addValue === false) {
      game.addValue = true;
    }
  };

  findGamesCtrl.prototype.addGame = function(context) {
  	var selectedGame = {
  	  name: context.game.name,
  		image: context.game.image.small_url,
  	  platform: context.consoleSelect,
  	  release:  context.game.original_release_date
  	};
  	this.fbGames.$add(selectedGame);
  };
});