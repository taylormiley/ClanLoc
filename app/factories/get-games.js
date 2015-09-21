define([
  "angular",
], function(angular) {
  angular
  .module("ClanLocApp.getGames", [])
  .factory("getGamesFac", function($q, $http) {
    return {
      getGames: function(input) {
        return $q(function(resolve, reject) {
          $http.jsonp('http://www.giantbomb.com/api/search/?api_key=6a92f6ebcbb5df56137a66264d2508b21df6146f&format=jsonp&json_callback=JSON_CALLBACK&query=' + input + '&resources=game&field_list=genres,name,image,platforms,original_release_date')        
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