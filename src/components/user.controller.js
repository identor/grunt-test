(function() {
  'use strict';

  var app = angular.module('angularTest');

  app.controller('UserCtrl', UserCtrl);

  function UserCtrl($scope, User, userService) {
    $scope.user = new User('Irvin', '123');
    $scope.user2 = userService;
    $scope.user2.name = 'Irvin Denzel';
  }

})();

