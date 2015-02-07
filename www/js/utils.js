var app;

app = angular.module('app');

app.factory('$localstorage', [
  '$window', function($window) {
    var get, getObject, set, setObject;
    set = function() {
      return $window.localStorage[key] = value;
    };
    get = function() {
      return $window.localStorage[key] || defaultValue;
    };
    setObject = function() {
      return $window.localStorage[key] = JSON.stringify(value);
    };
    return getObject = function() {
      return JSON.parse($window.localStorage[key] || '{}');
    };
  }
]);
