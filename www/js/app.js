var app;

app = angular.module('app', ['ionic', 'ionic.ion.headerShrink']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'templates/login.html',
    controller: 'LoginController'
  }).state('app.oauth_callback', {
    url: '/oauth-callback',
    templateUrl: 'templates/test.html',
    controller: 'LoginController'
  });
  $urlRouterProvider.otherwise('/');
});

var app;

app = angular.module('app');

app.controller('LoginController', function($scope, $stateParams) {
  return $scope.oauthVenmo = function() {
    var ref, url_root;
    url_root = 'https://api.venmo.com/v1/oauth/';
    ref = window.open(url_root + 'authorize?client_id=' + 2344 + '&scope=' + 'make_payments%20access_profile%20access_email%20access_phone%20access_friends' + '&response_type=token');
    return ref.addEventListener('loadstart', function(event) {
      if (event.url.startsWith('http://westbrook.local:8100/')) {
        $scope.url = event.url;
        return ref.close();
      }
    });
  };
});

var app, _base, _base1;

app = angular.module('app');

if ((_base = String.prototype).startsWith == null) {
  _base.startsWith = function(s) {
    return this.slice(0, s.length) === s;
  };
}

if ((_base1 = String.prototype).endsWith == null) {
  _base1.endsWith = function(s) {
    return s === '' || this.slice(-s.length) === s;
  };
}

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
