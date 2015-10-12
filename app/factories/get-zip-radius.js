define([
  "angular",
], function(angular) {
  angular
  .module("ClanLocApp.getZipRadius", [])
  .factory("getZipRadiusFac", function($q, $http) {
    return {
      getZipRadius: function() {
        return $q(function(resolve, reject) {
          $http.get('https://www.zipcodeapi.com/rest/CGuwc7HxTB23hNleeFQOG1zQVwyQSwwud11p8IX2kZ5BNrQ26HQNJqDEWcuOI1jW/radius.json/37075/30/mile')
          .success(
            function(data) {
              // console.log("test", objectFromJSONFile);
              resolve(data);
            },function(error) {
              reject(error);
            }
          );
        });
      }
    };  
  });
});