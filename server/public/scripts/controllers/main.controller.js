app.controller('MainController', ['MainService', function(MainService) {
  console.log('angular.js');

  var self = this;

  self.newPost = MainService.newPost;
  self.posts = MainService.posts;
  self.newComment = MainService.newComment;

  // Gets the posts from the server
  // Populates a few extra fields
  self.getPosts = MainService.getPosts;
  

  // Adds a new post to the server
  self.postExperience = MainService.postExperience;

  // Deletes given post from the server
  self.deletePost = MainService.deletePost;

  // Gets all comments from the server
  // populates comments into individual posts
  self.getComments = MainService.getComments;

  // Adds a new comment to the post
  self.addComment = MainService.addComment;

  // Removes comment from database
  self.deleteComment = MainService.deleteComment;

  self.clearCommentInputs = MainService.clearCommentInputs;

  // Allows toggling of displaying the Add Comment field
  self.displayAddComment = MainService.displayAddComment;

  self.init = function () {
    self.getPosts();
  }

  self.init();
}])