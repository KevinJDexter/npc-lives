app.controller('AdminController', ['PostService', function(PostService) {
  console.log('Admin Controller loaded');

  var self = this;

  self.posts = PostService.posts;

  self.getPosts = PostService.getPosts;
  self.getComments = PostService.getComments;

  self.deletePost = PostService.deletePost;
  self.deleteComment = PostService.deleteComment;

  self.getPosts();
}])