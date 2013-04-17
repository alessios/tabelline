'use strict';

/* Controllers */

function TabellineCtrl($scope) {
    $scope.tabelline = [];
    for (var i = 0; i < 11; i++) {
        $scope.tabelline.push({'multi': i, 'enabled': true});
    }
    $scope.m1 = 0;
    $scope.m2 = 0;
    $scope.result = 0;
}

//PhoneListCtrl.$inject = ['$scope', 'Phone'];



//function PhoneDetailCtrl($scope, $routeParams, Phone) {
//  $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
//    $scope.mainImageUrl = phone.images[0];
//  });
//
//  $scope.setImage = function(imageUrl) {
//    $scope.mainImageUrl = imageUrl;
//  }
//}

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams', 'Phone'];
