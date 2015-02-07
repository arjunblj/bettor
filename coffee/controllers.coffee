
app = angular.module('app')

app.controller('NavigationController', ($scope, $location, $state, $window) ->

    $scope.createVariable = (url) ->
      $window.location.href = url

    $scope.createFixed = () ->
      $window.location.href = '/#/compose'
)

app.controller('LoginController', ($scope, $stateParams) ->

  $scope.oauthVenmo = ->

    url_root = 'https://api.venmo.com/v1/oauth/'
    ref = window.open(url_root + 'authorize?client_id=' + 2344 + '&scope=' + 'make_payments%20access_profile%20access_email%20access_phone%20access_friends' + '&response_type=token')

    ref.addEventListener('loadstart', (event) ->
      if (event.url).startsWith('http://westbrook.local:8100/')
        $scope.url = event.url
        ref.close()
    )
)

app.controller('FeedController', ($scope, $stateParams) ->
)

app.controller('ComposeController', ($scope, $stateParams) ->
)

app.controller('BetDetailController', ($scope, $stateParams) ->
)

app.controller('SubmitPhoneController', ($scope, $stateParams) ->
)

app.controller('VerifyCodeController', ($scope, $stateParams) ->
)