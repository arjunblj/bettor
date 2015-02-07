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
  });
  $stateProvider.state('callback', {
    url: '/oauth-callback',
    controller: 'LoginController'
  });
  $stateProvider.state('feed', {
    url: '/feed',
    templateUrl: 'templates/feed.html',
    controller: 'FeedController'
  });
  $stateProvider.state('compose', {
    url: '/compose',
    templateUrl: 'templates/compose.html',
    controller: 'ComposeController'
  });
  $stateProvider.state('detail', {
    url: '/bet/:bet_id',
    controller: 'BetDetailController'
  });
  $stateProvider.state('enter-phone', {
    url: '/submit-phone',
    templateUrl: 'templates/enter_phone.html',
    controller: 'SubmitPhoneController'
  });
  $stateProvider.state('verify-code', {
    url: '/verify-code',
    templateUrl: 'templates/verify-code.html',
    controller: 'VerifyCodeController'
  });
  $urlRouterProvider.otherwise('/');
});

var app;

app = angular.module('app');

app.controller('NavigationController', function($scope, $location, $state, $window) {
  $scope.createVariable = function(url) {
    return $window.location.href = url;
  };
  return $scope.createFixed = function() {
    return $window.location.href = '/#/compose';
  };
});

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

app.controller('FeedController', function($scope, $stateParams) {});

app.controller('ComposeController', function($scope, $stateParams) {});

app.controller('BetDetailController', function($scope, $stateParams) {});

app.controller('SubmitPhoneController', function($scope, $stateParams) {});

app.controller('VerifyCodeController', function($scope, $stateParams) {});

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
