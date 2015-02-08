var app;

app = angular.module('app', ['ionic', 'ionic.ion.headerShrink', 'ngCordova']);

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
  $stateProvider.state('submit-phone', {
    url: '/submit-phone',
    templateUrl: 'templates/enter_phone.html',
    controller: 'SubmitPhoneController'
  });
  $stateProvider.state('verify-code', {
    url: '/verify-code',
    templateUrl: 'templates/verify-code.html',
    controller: 'VerifyCodeController'
  });
  $stateProvider.state('contact-select', {
    url: '/contact-select',
    templateUrl: 'templates/contact-select.html',
    controller: 'ContactSelectController'
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
    return $window.location.href = '/#/contact-select';
  };
});

app.controller('LoginController', function($scope, $stateParams) {
  return $scope.oauthVenmo = function() {
    "Venmo OAuth.";
    var ref, url_root;
    url_root = 'https://api.venmo.com/v1/oauth/';
    ref = window.open(url_root + 'authorize?client_id=' + 2344 + '&scope=' + 'make_payments%20access_profile%20access_email%20access_phone%20access_friends' + '&response_type=token');
    return ref.addEventListener('loadstart', function(event) {
      $scope.url = event.url;
      return ref.close();
    });
  };
});

app.controller('FeedController', function($scope, $stateParams) {});

app.controller('ComposeController', function($scope, $stateParams) {});

app.controller('BetDetailController', function($scope, $stateParams) {});

app.controller('SubmitPhoneController', function($scope, $stateParams, $window) {
  var access_token;
  access_token = app.getParameterByName('access_token');
  window.localStorage['oauth_token'] = access_token;
  return $scope.postPhone = function($event) {
    var phone_num;
    phone_num = $scope.phoneNumber;
    return $window.location.href = '/#/verify-code';
  };
});

app.controller('VerifyCodeController', function($scope, $stateParams, $window) {
  return $scope.postVC = function($event) {
    var verification_code;
    verification_code = $scope.verificationCode;
    return $window.location.href = '/#/feed';
  };
});

app.controller('ContactSelectController', function($scope, $stateParams, $cordovaContacts) {
  document.addEventListener('deviceready', function() {
    $scope.count = 17;
    return $scope.navigator = $cordovaContacts;
  }, false);
  $scope.data = {
    selectedContacts: []
  };
  return $scope.pickContact = function() {
    return $cordovaContacts.pickContact().then(function(contact) {
      $scope.err = contact;
      $scope.data.selectedContacts.push(contact);
      console.log('Selected contacts=');
      return console.log($scope.data.selectedContacts);
    }, function(failure) {
      $scope.err = failure;
      return console.log('Bummer, no contacts.');
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

app.getParameterByName = function(name) {
  var regex, results;
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  results = regex.exec(location.search);
  if (results) {
    return decodeURIComponent(results[1].replace(/\+/g, " "));
  }
};
