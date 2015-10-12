define([
  "angular",
  "angularRoute",
  "firebase",
  "bootstrap", 
], function(angular, angularRoute, firebase, bootstrap) {
  angular.module("ClanLocApp.clanProfile", ["ngRoute"])
  .config(["$routeProvider", function($routeProvider) {
    $routeProvider.when("/clan-profile", {
      templateUrl: "../partials/clan-profile.html",
      controller: "clanProfileCtrl",
      controllerAs: "clanProfile"
    });
  }])
  .controller("clanProfileCtrl", clanProfileCtrl);
  clanProfileCtrl.$inject = ["$routeParams", "$firebaseArray", "getGamesFac", "uidFac"];
  function clanProfileCtrl($routeParams, $firebaseArray, getGamesFac, uidFac) {
    this.authRef = new Firebase("https://clanloc.firebaseio.com");
    this.clansRef = new Firebase("https://clanloc.firebaseio.com/clans");
    this.clansArr = $firebaseArray(this.clansRef);
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
    this.clanId = $routeParams.clanName;
    console.log(this.clanId);
    console.log(this.clansArr);
  }
  clanProfileCtrl.prototype.joinClan = function(clan) {
    console.log("clicked!", clan);
    
  };
});