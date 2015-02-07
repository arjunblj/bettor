
app = angular.module('app', ['ionic', 'ionic.ion.headerShrink'])

app.run(($ionicPlatform) ->
  $ionicPlatform.ready ->
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar true if window.cordova and window.cordova.plugins.Keyboard
      StatusBar.styleDefault() if window.StatusBar
      return
  return
)

app.config ($stateProvider, $urlRouterProvider) ->

  $stateProvider.state('home',
    url: '/'
    templateUrl: 'templates/login.html'
    controller: 'LoginController'
  ).state('app.oauth_callback',
    url: '/oauth-callback'
    templateUrl: 'templates/test.html'
    controller: 'LoginController'
  )

  # If none of the above states are matched, use this as the fallback.
  $urlRouterProvider.otherwise '/'
  return