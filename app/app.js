define([
  "angular",
  "bootstrap",
  "angularfire",
  "angularRoute",
  "angularFilter",
  "controllers/find-games-ctrl"
], function(angular, bootstrap, angularfire, angularRoute, filter, findGamesCtrl) {
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

