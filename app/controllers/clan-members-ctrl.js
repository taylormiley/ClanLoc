define([
  "angular",
  "angularRoute",
  "firebase",
  "bootstrap", 
], function(angular, angularRoute, firebase, bootstrap) {
  angular.module("ClanLocApp.clanMembers", ["ngRoute"])
  .config(["$routeProvider", function($routeProvider) {
    $routeProvider.when("/clan-members", {
      templateUrl: "../partials/clan-members.html",
      controller: "clanMembersCtrl",
      controllerAs: "clanMembers"
    });
  }])
  .controller("clanMembersCtrl", clanMembersCtrl);
  clanMembersCtrl.$inject = ["$firebaseArray", "getGamesFac"];
  function clanMembersCtrl($firebaseArray, getGames) {
    this.usersRef = new Firebase("https://clanloc.firebaseio.com/users");
    this.authRef = new Firebase("https://clanloc.firebaseio.com");
    this.usersArr = $firebaseArray(this.usersRef);
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
});