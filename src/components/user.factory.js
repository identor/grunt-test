(function() {
  'use strict';

  var app = angular.module('angularTest');

  app.factory('User', getUser);

  function getUser() {
    var User = function (name, password) {
      this.name = name;
      this.password = password;
    };

    User.prototype.resetPassword = function () {
      this.password = '12345';
    };

    return User;
  }

})();

