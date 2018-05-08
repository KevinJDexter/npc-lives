app.controller('ViewController', ['PostService', function(PostService) {
  console.log('View Controller loaded');

  var self = this;
  
  self.posts = PostService.posts;
  self.newComment = PostService.newComment;

  self.displayAddComment = PostService.displayAddComment;
  self.addComment = PostService.addComment;
  
  self.getPosts = PostService.getPosts;
  self.getComments = PostService.getComments;

  self.getPosts();
}])