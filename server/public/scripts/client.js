console.log('client.js');

var app = angular.module('NPCLivesApp', []);

app.controller('NPCLivesController', ['$http', function($http) {
  console.log('angular.js');

  var self = this;

  self.pageTitle = 'Welcome to your NPC Life!';
  self.newPost = {};
  self.posts = [];
  self.comments = {};
  self.newComment = {};

  // Gets the posts from the server
  self.getPosts = function () {
    $http({
      method: 'GET',
      url: '/post'
    })
      .then(function(response) {
        console.log(response.data);
        self.posts = response.data;
        self.getComments();
      })
      .catch(function(error) {
        console.log(error);
      })
  }

  // Adds a new post to the server
  self.postExperience = function() {
    $http({
      method: 'POST',
      url: '/post',
      data: self.newPost
    })
      .then(function (response) {
        console.log(response);
        self.getPosts();
      })
      .catch(function(error) {
        console.log(error);
      })
  }

  // Deletes given post from the server
  self.deletePost = function(post) {
    $http({
      method: 'DELETE',
      url: '/post',
      params: post
    })
      .then(function(response) {
        console.log(response);
        self.getPosts();
      })
      .catch(function(error) {
        console.log(error);
      })
  }

  // Gets all comments from the server
  self.getComments = function () {
    $http({
      method: 'GET',
      url: '/comment',
    })
      .then(function (response) {
        self.comments = response.data;
        console.log(self.comments[self.posts[0]._id])
      })
      .catch(function(error) {
        console.log(error);
      })
  }

  // Adds a new comment to the post
  self.addComment = function(associatedPost) {
    self.newComment.target_post = associatedPost._id;
    $http({
      method: 'POST',
      url: '/comment',
      data: self.newComment
    })
      .then(function(response) {
        console.log(response);
        self.getComments();
      })
      .catch(function(error) {
        console.log(error);
      })
  }

  self.init = function () {
    self.getPosts();
  }
}])