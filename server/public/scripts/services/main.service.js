app.service('MainService', ['$http', function ($http) {
  console.log('angular.js');

  var self = this;

  self.pageTitle = 'It\'s YOUR life! Speak out and be heard!';
  self.description = 'As a Non-Player Character, too often are you kept silent as adventurers go about with their antics. Here you can voice your opinions, complaints, or joys! Don\'t stay silent any longer. Let the world know you\'re here!';

  self.events = {list: []};

  self.getEvent = function () {
    self.events.list.push("The castle was attacked by the white dragon Vorugal");
    self.events.list.push("The Autumn Festival begins tomorrow");
  }
}])