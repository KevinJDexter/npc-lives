app.controller('PostController', ['PostService', function(PostService) {
  console.log('Post Controller loaded')

  var self = this;

  self.newPost = PostService.newPost;

  self.postExperience = PostService.postExperience;
  self.clearPostInputs = PostService.clearPostInputs;

  self.init = function () {
    self.clearPostInputs();
  }

  self.init();
}])