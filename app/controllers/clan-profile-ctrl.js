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
  .controller("clanProfileCtrl", ["$firebaseArray", "getGamesFac", function($firebaseArray, getGames) {
  }]);
});