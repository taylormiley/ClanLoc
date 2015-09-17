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
  .controller("profileCtrl", ["$firebaseArray", "getGamesFac", function($firebaseArray, getGames) {
  }]);
});
