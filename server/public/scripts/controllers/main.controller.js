app.controller('MainController', ['MainService', function(MainService) {
  console.log('angular.js');

  var self = this;

  self.pageTitle = MainService.pageTitle;
  self.description = MainService.description;

  self.events = MainService.events;

  MainService.getEvent();
}])