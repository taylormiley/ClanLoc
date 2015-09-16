define([
  "angular",
  "bootstrap",
  "angularfire",
  "angularRoute",
  "angularFilter",
  "factories/get-games",
  "controllers/find-games-ctrl"
], function(angular, bootstrap, angularfire, angularRoute, filter, getGames, findGamesCtrl) {
  return angular.module("ClanLocApp", [
    "ngRoute",
    "firebase",
    "ClanLocApp.getGames",
    "ClanLocApp.findGames",
    "angular.filter"
  ]).
  config(["$routeProvider", function($routeProvider) {
    $routeProvider
    .when('/find-games', {
      templateUrl: 'partials/find-games.html',
      controller: 'findGamesCtrl as findGames'
    })
    .otherwise({redirectTo: "/"});
  }]);
});

