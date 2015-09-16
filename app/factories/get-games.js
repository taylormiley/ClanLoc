define([
  "angular",
], function(angular) {
  angular
  .module("ClanLocApp.getGames", [])
  .factory("getGames", function($q, $http) {
    return {
      getGames: function() {
        return $q(function(resolve, reject) {
          $http.jsonp('http://www.giantbomb.com/api/game/3030-4725/?api_key=6a92f6ebcbb5df56137a66264d2508b21df6146f&format=jsonp&json_callback=JSON_CALLBACK&field_list=genres,name,image')        
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