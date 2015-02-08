
app = angular.module('app')

# http://stackoverflow.com/a/646643
String::startsWith ?= (s) -> @[...s.length] is s
String::endsWith   ?= (s) -> s is '' or @[-s.length..] is s

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

app.getParameterByName = (name) ->
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]")
  regex = new RegExp("[\\?&]" + name + "=([^&#]*)")
  results = regex.exec(location.search)
  decodeURIComponent(results[1].replace(/\+/g, " ")) if results
