console.log('client.js');

var app = angular.module('NPCLivesApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainController as vm'
    })
    .otherwise({
      template: '<h2>404</h2>'
    })
})