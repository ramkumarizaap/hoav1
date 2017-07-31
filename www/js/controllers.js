angular.module('starter.controllers', ['ngCordova'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout,$state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
    // Open the login modal
  $scope.logout = function() {
    $state.go("app.login",{},{reload:true});
  };

})

.controller('HomeCtrl', function($scope,$ionicModal) {
  
  $ionicModal.fromTemplateUrl('../templates/post-feed.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.showPostFeed = function ()
  {
     $scope.modal.show();
  };
  $scope.closePostFeed = function()
  {
    $scope.modal.hide();
  };
  
})

.controller('LoginCtrl', function($scope,$state, $stateParams,$ionicLoading,$ionicPopup,$timeout) {
  $scope.login = {};
  $scope.doLogin = function(form,values){
    // $ionicLoading.show();
    if(form.$valid)
    {
      $state.go("app.home",{},{reload:true});
      // var alert = $ionicPopup.alert({
      //   title:"Login Failed!",
      //   template:"Invalid Username or Password."
      // });
    }
    $timeout(function(){
    $ionicLoading.hide();
    },2000);
  }

})

.controller('RegisterCtrl', function($scope,$state, $stateParams,$ionicLoading,$ionicPopup,$timeout,$cordovaCamera,$ionicActionSheet, $cordovaImagePicker) {

$scope.img = "img/fresh-upload.png";
  $scope.UploadPhoto = function()
    {
      var hideSheet = $ionicActionSheet.show({
         buttons: [
           { text: 'Take New Photo' },
           { text: 'Choose From Gallery' },
         
         ],
         buttonClicked: function(index) {

            if(index==0)
            {
              var options = {
                  quality: 50,
                  destinationType: Camera.DestinationType.DATA_URL,
                  sourceType: Camera.PictureSourceType.CAMERA,
                  allowEdit: false,
                  encodingType: Camera.EncodingType.JPEG,
                  targetWidth: 100,
                  targetHeight: 100,
                  popoverOptions: CameraPopoverOptions,
                  saveToPhotoAlbum: false,
                  correctOrientation:true
                };
                $cordovaCamera.getPicture(options).then(function(imageData) {
                  var image = document.getElementById('myImage');
                  $scope.img = "data:image/jpeg;base64," + imageData;
                }, function(err) {
                  // error
                });

                //uploadFile(results[i]);
            }
            else
            {

                var options = {
                 maximumImagesCount: 10,
                 width: 100,
                 height: 100,
                 quality: 80
                };
               $cordovaImagePicker.getPictures(options)
                .then(function (results) {
                  for (var i = 0; i < results.length; i++) {
                    $scope.img = results[i];
                   alert(results[i]);
                  }
                }, function(error) {
                  // error getting photos
                });
            }
          return true;
         }//enable hidesheet will hide actionsheet
       });
    }

  });
