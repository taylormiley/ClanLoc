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
  .controller("clanMembersCtrl", ["$firebaseArray", "getGamesFac", function($firebaseArray, getGames) {
  }]);
});