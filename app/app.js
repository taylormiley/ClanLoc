define([
  "angular",
  "bootstrap",
  "angularfire",
  "angularRoute",
  "angularFilter",
  "factories/get-games",
  "factories/uid",
  "factories/get-zip-radius",
  "controllers/find-games-ctrl",
  "controllers/clan-members-ctrl",
  "controllers/clan-profile-ctrl",
  "controllers/find-clans-ctrl",
  "controllers/make-clan-ctrl",
  "controllers/profile-ctrl",
  "controllers/profile-detail-ctrl",
  "controllers/login-ctrl",
  "controllers/username-ctrl"
], function(angular, bootstrap, angularfire, angularRoute, filter, getGamesFac, uidFac, getZipRadiusFac, findGamesCtrl, clanMembersCtrl, clanProfileCtrl, findClansCtrl, makeClanCtrl, profileCtrl, profileDetailCtrl, loginCtrl, usernameCtrl) {
  return angular.module("ClanLocApp", [
    "ngRoute",
    "firebase",
    "ClanLocApp.getGames",
    "ClanLocApp.uid",
    "ClanLocApp.getZipRadius",
    "ClanLocApp.findGames",
    "ClanLocApp.clanMembers",
    "ClanLocApp.clanProfile",
    "ClanLocApp.findClans",
    "ClanLocApp.makeClan",
    "ClanLocApp.profile",
    "ClanLocApp.profileDetail",
    "ClanLocApp.login",
    "ClanLocApp.username",
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
    }).when('/clan-profile/:clanName', {
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
    }).when('/profile-detail/:userUsername', {
      templateUrl: 'partials/profile-detail.html',
      controller: 'profileDetailCtrl as profileDetail'
    }).when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'loginCtrl as login'
    }).when('/username', {
      templateUrl: 'partials/username.html',
      controller: 'usernameCtrl as username'
    }).otherwise({redirectTo: "/login"});
  }]);
});

