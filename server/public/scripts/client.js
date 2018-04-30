console.log('client.js');

var app = angular.module('NPCLivesApp', []);

app.controller('NPCLivesController', ['$http', function($http) {
  console.log('angular.js');

  var self = this;

  self.pageTitle = 'Welcome to your NPC Life!';
  self.newPost = {};

  
}])