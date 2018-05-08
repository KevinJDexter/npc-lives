app.service('PostService', ['$http', function($http) {
  console.log('Post Service loaded');

  var self = this;

  self.newPost = {
    post: '',
    poster: '',
    location: ''
  };

  self.postExperience = function () {
    $http({
      method: 'POST',
      url: '/post',
      data: self.newPost
    })
      .then(function (response) {
        console.log(response);
        self.clearPostInputs();
      })
      .catch(function (error) {
        console.log(error);
        alert('Post must have name, post, and location')
      })
  }

  self.clearPostInputs = function () {
    self.newPost.post = '';
    self.newPost.poster = '';
    self.newPost.location = '';
  }
}])