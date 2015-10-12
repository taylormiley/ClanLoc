define([
	"angular",
	"angularRoute",
	"firebase",
	"bootstrap", 
], function(angular, angularRoute, firebase, bootstrap) {
	angular.module("ClanLocApp.findGames", ["ngRoute"])
	.config(["$routeProvider", function($routeProvider) {
		$routeProvider.when("/find-games", {
			templateUrl: "../partials/find-games.html",
			controller: "findGamesCtrl",
			controllerAs: "findGames"
		});
	}])
	.controller("findGamesCtrl", findGamesCtrl); 
	findGamesCtrl.$inject = ["$firebaseArray", "getZipRadiusFac", "getGamesFac", "uidFac"];
	function findGamesCtrl($firebaseArray, getZipRadiusFac, getGamesFac, uidFac) {
    this.authRef = new Firebase("https://clanloc.firebaseio.com");
    this.gamesRef = new Firebase("https://clanloc.firebaseio.com/games");
    this.usersRef = new Firebase("https://clanloc.firebaseio.com/users");
    this.fbGamesArr = $firebaseArray(this.gamesRef);
    this.usersArr = $firebaseArray(this.usersRef);
    this.getGames = getGamesFac;
    this.getZip = getZipRadiusFac;
    this.uid = "";
    this.username = "";
		this.gamesArr = [];
		this.searchInput = "";
    this.consoleSelect = "";
    this.usersArr.$loaded().then(angular.bind(this, function(data) {
      for(var key in data) {
        if(data[key].uid === this.uid) {
          this.username = data[key].username;
        }
      }
      return this.username;
    }.bind(this)));
    this.authRef.onAuth(function authDataCallback(authData) {
      if (authData) {
        console.log("User " + authData.uid + " is logged in with " + authData.provider);
        this.uid = authData.uid;
        console.log(this.uid);
      } else {
        console.log("User is logged out");
      }
      return this.uid;
    }.bind(this));
	}

	findGamesCtrl.prototype.searchGames = function () {
    console.log("searched!");
    this.getGames.getGames(this.searchInput).then(function(data) {
    	this.gamesArr = data.results;
    }.bind(this));
    this.getZip.getZipRadius().then(function(data) {
      console.log(data);
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
  	  release:  context.game.original_release_date,
      user: this.uid
  	};
    console.log(selectedGame);
  	this.fbGamesArr.$add(selectedGame);
  };
});