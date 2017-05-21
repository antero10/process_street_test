'use strict';

angular.module('processTestApp',['blueimp.fileupload'])
  .constant('Config', {
    'TOKEN': 'd3098b3e8682e8ec85221d54cbf681050ac8ec6caa656aaff5eba0fa15a7a0ad'
  })
  .component('fileupload', {
    templateUrl: 'views/fileUpload.html',
    controller : function($scope,$timeout,Config) {
      $scope.options = {
        type: 'POST',
        url: 'https://upload.wistia.com?access_token=' + Config.TOKEN
      };
      $scope.$on('fileuploaddone',function(file,data){
        var video_id = data.result.hashed_id;
        $scope.mediaHashId = video_id;
        $timeout(function() {
          var wistiaEmbed = Wistia.embed(video_id, {
             videoFoam: true,
             playerColor: "3B97D3"
           });
        },100);
      });
    }
  });
