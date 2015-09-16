define([
  "angular",
  "bootstrap",
  "angularfire",
  "angularRoute",
  "angularFilter",
  "controllers/gameCtrl"
], function(angular, bootstrap, angularfire, angularRoute, filter, gameCtrl) {
  return angular.module("ClanLocApp", [
    "ngRoute",
    "firebase",
    "ClanLocApp.findGames",
    "angular.filter"
  ]).
  config(["$routeProvider", function($routeProvider) {
    $routeProvider.otherwise({redirectTo: "/"});
  }]);
});

