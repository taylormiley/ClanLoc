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
  .controller("findClansCtrl", ["$firebaseArray", "getGamesFac", function($firebaseArray, getGames) {
  }]);
});