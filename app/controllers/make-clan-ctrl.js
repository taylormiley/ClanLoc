define([
  "angular",
  "angularRoute",
  "firebase",
  "bootstrap"
], function(angular, angularRoute, firebase, bootstrap) {
  angular.module("ClanLocApp.makeClan", ["ngRoute"])
  .config(["$routeProvider", function($routeProvider) {
    $routeProvider.when("/make-clan", {
      templateUrl: "../partials/make-clan.html",
      controller: "makeClanCtrl",
      controllerAs: "makeClan"
    });
  }])
  .controller("makeClanCtrl", makeClanCtrl);
  makeClanCtrl.$inject = ["$firebaseArray", "getGamesFac", "uidFac"];
  function makeClanCtrl($firebaseArray, getGamesFac, uidFac) {
    this.authRef = new Firebase("https://clanloc.firebaseio.com");
    this.clansRef = new Firebase("https://clanloc.firebaseio.com/clans");
    this.gamesRef = new Firebase("https://clanloc.firebaseio.com/games");
    this.usersRef = new Firebase("https://clanloc.firebaseio.com/users");
    this.fbGamesArr = $firebaseArray(this.gamesRef);
    this.usersArr = $firebaseArray(this.usersRef);
    this.clansArr = $firebaseArray(this.clansRef);
    this.uid = "";
    this.username = "";
    this.filterGames = "";
    this.clanName = "";
    this.aboutClan = "";
    this.clanSchedule = "";
    this.clanState = "";
    this.selectedGames = [];
    this.clanUsers = [];
    this.fbGamesArr.$loaded()
    .then(function() {
      console.log("this", this);
    }.bind(this));
    this.usersArr.$loaded().then(angular.bind(this, function(data) {
      for(var key in data) {
        if(data[key].uid === this.uid) {
          this.username = data[key].username;
        }
      }
      return this.username;
    }.bind(this)));
    this.authRef.onAuth(function authDataCallback(authData) {
      if (authData) {
        console.log("User " + authData.uid + " is logged in with " + authData.provider);
        this.uid = authData.uid;
        console.log(this.uid);
      } else {
        console.log("User is logged out");
      }
      return this.uid;
    }.bind(this));
  }
  makeClanCtrl.prototype.toggleSelection = function(game){
    if (this.selectedGames.indexOf(game) !== -1) {
      this.selectedGames.splice(game, 1);
      console.log(this.selectedGames.indexOf(game));
    } else {
      this.selectedGames.push(game);
    }
    console.log(this.selectedGames.indexOf(game.name));
    
    console.log(this.selectedGames);
  };

  makeClanCtrl.prototype.addClan = function() {
    this.clanUsers.push(this.uid);
    var newClan = {
      name: this.clanName,
      about: this.aboutClan,
      schedule: this.clanSchedule,
      games: this.selectedGames,
      master: this.uid,
      users: this.clanUsers,
      state: this.clanState
    };
    console.log(newClan);
    this.clansArr.$add(newClan);
  
  };


});
