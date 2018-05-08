app.controller('ViewController', ['ViewService', function(ViewService) {
  console.log('View Controller loaded');

  var self = this;
  
  self.posts = ViewService.posts;
  self.newComment = ViewService.newComment;

  self.displayAddComment = ViewService.displayAddComment;
  self.addComment = ViewService.addComment;
  
  self.getPosts = ViewService.getPosts;
  self.getComments = ViewService.getComments;

  self.getPosts();
}])