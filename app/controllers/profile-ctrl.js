define([
  "angular",
  "angularRoute",
  "firebase",
  "bootstrap", 
], function(angular, angularRoute, firebase, bootstrap) {
  angular.module("ClanLocApp.profile", ["ngRoute"])
  .config(["$routeProvider", function($routeProvider) {
    $routeProvider.when("/profile", {
      templateUrl: "../partials/profile.html",
      controller: "profileCtrl",
      controllerAs: "profile"
    });
  }])
  .controller("profileCtrl", profileCtrl);
  profileCtrl.$inject = ["$firebaseArray", "getGamesFac"];
  function profileCtrl($firebaseArray, getGames) {
    this.ref = new Firebase("https://clanloc.firebaseio.com/games");
    this.fbGames = $firebaseArray(this.ref);
    this.addValue = false;
    this.fbGames.$loaded()
    .then(function() {
      console.log("this", this);
    }.bind(this));
  }

  profileCtrl.prototype.showInput = function(game) {
    if (game.addValue === undefined) {
      game.addValue = true;
    } else if (game.addValue === true) {
      game.addValue = false;
    } else if (game.addValue === false) {
      game.addValue = true;
    }
  };
});
