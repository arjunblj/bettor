
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
  )

  $stateProvider.state('callback',
    url: '/oauth-callback'
    # templateUrl: 'templates/test.html'
    controller: 'LoginController'
  )

  $stateProvider.state('feed',
    url: '/feed'
    templateUrl: 'templates/feed.html'
    controller: 'FeedController'
  )

  $stateProvider.state('compose',
    url: '/compose'
    templateUrl: 'templates/compose.html'
    controller: 'ComposeController'
  )

  $stateProvider.state('detail',
    url: '/bet/:bet_id'
    # templateUrl: 'templates/bet_detail.html'
    controller: 'BetDetailController'
  )

  $stateProvider.state('enter-phone',
    url: '/submit-phone'
    templateUrl: 'templates/enter_phone.html'
    controller: 'SubmitPhoneController'
  )

  $stateProvider.state('verify-code',
    url: '/verify-code'
    templateUrl: 'templates/verify-code.html'
    controller: 'VerifyCodeController'
  )

  # If none of the above states are matched, use this as the fallback.
  $urlRouterProvider.otherwise '/'
  return