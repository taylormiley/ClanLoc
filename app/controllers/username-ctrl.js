define([
  "angular",
  "firebase",
  "angularRoute"
], function(angular, angularRoute, firebase) {
  angular
  .module("ClanLocApp.username", ["ngRoute"])
  .config(["$routeProvider", function($routeProvider) {
    $routeProvider.when("/username", {
      templateUrl: "../partials/username.html",
      controller: "usernameCtrl",
      controllerAs: "username"
    });
  }])
  .controller("usernameCtrl", usernameCtrl);
  usernameCtrl.$inject = ["$firebaseAuth", "$firebaseArray", "uidFac"];
  function usernameCtrl($firebaseAuth, $firebaseArray, uidFac) {
    this.userRef = new Firebase("https://clanloc.firebaseio.com/users/");
    this.usersArr = $firebaseArray(this.userRef);
    this.currentUID = uidFac.getUid();
  }

  usernameCtrl.prototype.checkAvail = function(choosing) {
    this.usernameAvailable = false;
    for (var k = 0; k < this.usersArr.length; k++) {
      if(this.usersArr[k].username === this.username) {
        this.usernameAvailable = false;
        alert("I'm sorry, the username " + this.username + " is taken.");
        break;
      } else {
        this.usernameAvailable = true;
      }
    }
    if(this.usernameAvailable && choosing) {
      this.newUsername();
    } else if (this.usernameAvailable) {
      alert(this.username + " is available!");
    }
  };

  usernameCtrl.prototype.newUsername = function() {
    this.usersArr.$add({
      uid: this.currentUID,
      username: this.username
    });
    window.location = "#/profile/";
  };
});