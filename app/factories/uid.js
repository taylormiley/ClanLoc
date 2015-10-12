define([
  "angular",
], function(angular) {
  angular
  .module("ClanLocApp.uid", [])
  .factory("uidFac", function() {
    var uid = null;
    return {
      getUid: function() {
        return uid;
      },
      setUid: function(sentID) {
        uid = sentID;
      }
    };
  });
});