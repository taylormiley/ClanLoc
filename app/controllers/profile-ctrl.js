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
  profileCtrl.$inject = ["$firebaseArray", "getGamesFac", "uidFac"];
  function profileCtrl($firebaseArray, getGamesFac, uidFac) {
    this.authRef = new Firebase("https://clanloc.firebaseio.com");
    this.gamesRef = new Firebase("https://clanloc.firebaseio.com/games");
    this.usersRef = new Firebase("https://clanloc.firebaseio.com/users");
    this.clansRef = new Firebase("https://clanloc.firebaseio.com/clans");
    this.fbGamesArr = $firebaseArray(this.gamesRef);
    this.usersArr = $firebaseArray(this.usersRef);
    this.clansArr = $firebaseArray(this.clansRef);
    this.addValue = false;
    this.uid = "";
    this.username = "";
    this.fbGamesArr.$loaded()
    .then(function() {
      console.log("this", this);
    }.bind(this));
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
        this.uid = authData.uid;
      } else {
        console.log("User is logged out");
      }
      return this.uid;
    }.bind(this));
  }

  profileCtrl.prototype.showInput = function(game) {
    console.log(game);
    if (game.addValue === undefined) {
      game.addValue = true;
    } else if (game.addValue === true) {
      game.addValue = false;
    } else if (game.addValue === false) {
      game.addValue = true;
    }
  };
  profileCtrl.prototype.aboutInput = function(user) {
    console.log(user);
    if (user.addValue === undefined) {
      user.addValue = true;
    } else if (user.addValue === true) {
      user.addValue = false;
    } else if (user.addValue === false) {
      user.addValue = true;
    }
  };
});
