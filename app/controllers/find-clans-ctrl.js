define([
  "angular",
  "angularRoute",
  "firebase",
  "bootstrap", 
], function(angular, angularRoute, firebase, bootstrap) {
  angular.module("ClanLocApp.findClans", ["ngRoute"])
  .config(["$routeProvider", function($routeProvider) {
    $routeProvider.when("/find-clans", {
      templateUrl: "../partials/find-clans.html",
      controller: "findClansCtrl",
      controllerAs: "findClans"
    });
  }])
  .controller("findClansCtrl", findClansCtrl);
  findClansCtrl.$inject = ["$firebaseArray", "getGamesFac", "uidFac"]; 
  function findClansCtrl($firebaseArray, getGamesFac, uidFac) {
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
    console.log(this.usersArr);
    this.usersArr.$loaded().then(angular.bind(this, function(data) {
      for(var key in data) {
        console.log(data[key].uid);
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
    console.log(this.uid);
  }
});