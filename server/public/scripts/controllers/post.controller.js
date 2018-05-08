app.controller('PostController', ['PostService', function(PostService) {
  console.log('Post Service loaded')

  var self = this;

  self.newPost = PostService.newPost;

  self.postExperience = PostService.postExperience;
}])