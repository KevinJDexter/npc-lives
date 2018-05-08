console.log('client.js');

var app = angular.module('NPCLivesApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainController as vm'
    })
    .when('/view', {
      templateUrl: 'views/view.html',
      controller: 'ViewController as vm'
    })
    .when('/post', {
      templateUrl: 'views/post.html',
      controller: 'PostController as vm'
    })
    .when('/about', {
      templateUrl: 'views/about.html'
    })
    .when('/manincharge', {
      templateUrl: 'views/admin.html',
      controller: 'AdminController as vm'
    })
    .otherwise({
      template: '<h2>404</h2>'
    })
})