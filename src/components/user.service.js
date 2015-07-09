(function() {
  'use strict';

  var app = angular.module('angularTest');

  app.service('userService', userService);

  /*jshint validthis: true */
  function userService($http) {
    this.name = 'Irvin';
    $http.get('/').success(console.log('hello') || function () {
      console.log('Hello My Friend');
    });
  }

})();

