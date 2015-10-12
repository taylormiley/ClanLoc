define([
  "angular",
  "angularRoute",
  "firebase",
  "bootstrap", 
], function(angular, angularRoute, firebase, bootstrap) {
  angular.module("ClanLocApp.login", ["ngRoute"])
  .config(["$routeProvider", function($routeProvider) {
    $routeProvider.when("/login", {
      templateUrl: "../partials/login.html",
      controller: "loginCtrl",
      controllerAs: "login"
    });
  }])
  .controller("loginCtrl", loginCtrl); 
  loginCtrl.$inject = ["$firebaseAuth", "$firebaseArray", "getGamesFac", "uidFac"];
  function loginCtrl($firebaseAuth, $firebaseArray, getGamesFac, uidFac) {
    this.authRef = new Firebase("https://clanloc.firebaseio.com/");
    this.userRef = new Firebase("https://clanloc.firebaseio.com/users");
    this.usersArr = $firebaseArray(this.userRef);
    this.currentUID = "";
    this.goTo = "";
    this.uid = uidFac;
  }

  loginCtrl.prototype.signUp = function() {
    this.authRef.createUser({
      email: this.email,
      password : this.password
    }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        console.log("Successfully created user account with uid:", userData.uid);
        alert("User account created! You may now log in.");
      }
    }.bind(this));
  };

  loginCtrl.prototype.logIn = function() {
    this.authRef.authWithPassword({
      email: this.email,
      password: this.password
    }, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        this.currentUID = authData.uid;
        this.uid.setUid(this.currentUID);
        for (var i = 0; i < this.usersArr.length; i++) {
          if(this.usersArr[i].uid === this.currentUID) {
            this.goTo = "profile";
            break;
          } else {
            this.goTo = "username";
          }
        }
        if(this.goTo !== "") {
          window.location = "#/" + this.goTo + "/";
        }
      }
    }.bind(this), {
      remember: "default"
    });
  };
  
  loginCtrl.prototype.serviceAuth = function(service) {
    this.authRef.authWithOAuthPopup(service, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        this.currentUID = authData.uid;
        this.uid.setUid(this.currentUID);
        for (var i = 0; i < this.usersArr.length; i++) {
          if(this.usersArr[i].uid === this.currentUID) {
            goTo = "profile";
            break;
          } else {
            goTo = "username";
          }
        }
        if(goTo !== "") {
          window.location = "#/" + goTo + "/";
        }
      }
    }.bind(this), {
      remember: "default"
    });
  };
});