
app = angular.module('app')

app.factory '$localstorage', ['$window', ($window) ->

  set = ->
    $window.localStorage[key] = value;

  get = ->
    return $window.localStorage[key] || defaultValue;

  setObject = ->
    $window.localStorage[key] = JSON.stringify(value);

  getObject = ->
    return JSON.parse($window.localStorage[key] || '{}');
]