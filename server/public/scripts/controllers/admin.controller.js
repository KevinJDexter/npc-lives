app.controller('AdminController', ['AdminService', function(AdminService) {
  console.log('Admin Controller loaded');

  var self = this;

  self.posts = AdminService.posts;

  self.getPosts = AdminService.getPosts;
  self.getComments = AdminService.getComments;

  self.deletePost = AdminService.deletePost;
  self.deleteComment = AdminService.deleteComment;

  self.getPosts();
}])