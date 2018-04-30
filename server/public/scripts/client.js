console.log('client.js');

var app = angular.module('NPCLivesApp', []);

app.controller('NPCLivesController', ['$http', function($http) {
  console.log('angular.js');

  var self = this;

  self.pageTitle = 'Welcome to your NPC Life!';
  self.newPost = {};
  self.posts = [];
  self.newComment = {};

  // Gets the posts from the server
  // Populates a few extra fields
  self.getPosts = function () {
    $http({
      method: 'GET',
      url: '/post'
    })
      .then(function(response) {
        console.log(response.data);
        self.posts = response.data;
        self.posts.forEach(function (post) {
          post.showComments = false;
          post.showAddComment = false;
          post.comments = [];
        });
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
  // populates comments into individual posts
  self.getComments = function () {
    $http({
      method: 'GET',
      url: '/comment',
    })
      .then(function (response) {
        self.posts.forEach(post => {
          post.comments = response.data[post._id];
        });
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
        self.clearCommentInputs();
      })
      .catch(function(error) {
        console.log(error);
      })
  }

  // Removes comment from database
  self.deleteComment = function(comment) {
    $http({
      method: 'DELETE',
      url: '/comment',
      params: comment
    })
      .then(function(response) {
        console.log(response);
        self.getComments();
      })
      .catch(function(error) {
        console.log(error);
      })
  }

  self.clearCommentInputs = function () {
    self.newComment = {};
  }

  // Allows toggling of displaying the Add Comment field
  self.displayAddComment = function(postToDisplay, show) {
    self.posts.forEach(function (post) {
      post.showAddComment = false;
    })
    if (show) {
      postToDisplay.showAddComment = true;
    }
    self.clearCommentInputs();
  }

  self.init = function () {
    self.getPosts();
  }

  self.init();
}])