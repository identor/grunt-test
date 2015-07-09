(function() {
  'use strict';

  var app = angular.module('angularTest');

  app.controller('AnotherCtrl', AnotherCtrl);

  function AnotherCtrl($scope, User, userService) {
    $scope.user = userService;
  }

})();


