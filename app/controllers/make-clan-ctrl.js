define([
  "angular",
  "angularRoute",
  "firebase",
  "bootstrap", 
], function(angular, angularRoute, firebase, bootstrap) {
  angular.module("ClanLocApp.makeClan", ["ngRoute"])
  .config(["$routeProvider", function($routeProvider) {
    $routeProvider.when("/make-clan", {
      templateUrl: "../partials/make-clan.html",
      controller: "makeClanCtrl",
      controllerAs: "makeClan"
    });
  }])
  .controller("makeClanCtrl", ["$firebaseArray", "getGamesFac", function($firebaseArray, getGames) {
  }]);
});