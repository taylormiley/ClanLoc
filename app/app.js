define([
  "angular",
  "bootstrap",
  "angularfire",
  "angularRoute",
  "angularFilter",
  "factories/get-games",
  "controllers/find-games-ctrl",
  "controllers/clan-members-ctrl",
  "controllers/clan-profile-ctrl",
  "controllers/find-clans-ctrl",
  "controllers/make-clan-ctrl",
  "controllers/profile-ctrl"
], function(angular, bootstrap, angularfire, angularRoute, filter, getGamesFac, findGamesCtrl, clanMembersCtrl, clanProfileCtrl, findClansCtrl, makeClanCtrl, profileCtrl) {
  return angular.module("ClanLocApp", [
    "ngRoute",
    "firebase",
    "ClanLocApp.getGames",
    "ClanLocApp.findGames",
    "ClanLocApp.clanMembers",
    "ClanLocApp.clanProfile",
    "ClanLocApp.findClans",
    "ClanLocApp.makeClan",
    "ClanLocApp.profile",

    "angular.filter"
  ]).
  config(["$routeProvider", function($routeProvider) {
    $routeProvider
    .when('/find-games', {
      templateUrl: 'partials/find-games.html',
      controller: 'findGamesCtrl as findGames'
    }).when('/clan-members', {
      templateUrl: 'partials/clan-members.html',
      controller: 'clanMembersCtrl as clanMembers'
    }).when('/clan-profile', {
      templateUrl: 'partials/clan-profile.html',
      controller: 'clanProfileCtrl as clanProfile'
    }).when('/find-clans', {
      templateUrl: 'partials/find-clans.html',
      controller: 'findClansCtrl as findClans'
    }).when('/make-clan', {
      templateUrl: 'partials/make-clan.html',
      controller: 'makeClanCtrl as makeClan'
    }).when('/profile', {
      templateUrl: 'partials/profile.html',
      controller: 'profileCtrl as profile'
    })
    .otherwise({redirectTo: "/"});
  }]);
});

