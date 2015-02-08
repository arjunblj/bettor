
app = angular.module('app')


app.controller('NavigationController', ($scope, $location, $state, $window) ->

  $scope.createVariable = (url) ->
    $window.location.href = url

  $scope.createFixed = () ->
    $window.location.href = '/#/contact-select'

  # $scope.navClass = (page) ->
  #   currentRoute = $location.path().substring(1)
  #   return page === currentRoute ? 'active' : ''
)

app.controller('LoginController', ($scope, $stateParams) ->

  $scope.oauthVenmo = ->
    """Venmo OAuth.
    """
    url_root = 'https://api.venmo.com/v1/oauth/'
    ref = window.open(url_root + 'authorize?client_id=' + 2344 + '&scope=' + 'make_payments%20access_profile%20access_email%20access_phone%20access_friends' + '&response_type=token')

    ref.addEventListener('loadstart', (event) ->
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

app.controller('SubmitPhoneController', ($scope, $stateParams, $window) ->

  ## Save the access token from the query string on the callback from Venmo.
  access_token = app.getParameterByName('access_token')
  window.localStorage['oauth_token'] = access_token

  $scope.postPhone = ($event) ->
    phone_num = $scope.phoneNumber
    $window.location.href = '/#/verify-code'
)

app.controller('VerifyCodeController', ($scope, $stateParams, $window) ->

  $scope.postVC = ($event) ->
    verification_code = $scope.verificationCode
    $window.location.href = '/#/feed'

)

app.controller('ContactSelectController', ($scope, $stateParams, $cordovaContacts) ->

  document.addEventListener('deviceready', () ->
    $scope.count = 17
    $scope.navigator = $cordovaContacts
  , false)

  $scope.data = {
    selectedContacts: []
  }
  $scope.pickContact = () ->
    $cordovaContacts.pickContact()
      .then (contact) ->
        $scope.err = contact
        $scope.data.selectedContacts.push(contact)
        console.log 'Selected contacts='
        console.log $scope.data.selectedContacts
      , (failure) ->

        $scope.err = failure

        console.log('Bummer, no contacts.')
)

# app.controller('ContactSelectController', ($scope, $cordovaContacts) ->

#   $scope.getContactList = ->
#     $cordovaContacts.find({filter: ''}).then (result) ->
#       $scope.contacts = result
#     , (error) ->
#       console.log('ERROR: ' + error)
# )