app.service('AdminService', ['$http', function ($http) {
  console.log('Admin Service loaded')

  var self = this;

  self.posts = { list: [] };

  // Gets the posts from the server
  // Populates a few extra fields
  self.getPosts = function () {
    console.log('test');
    $http({
      method: 'GET',
      url: '/post'
    })
      .then(function (response) {
        console.log(response.data);
        self.posts.list = response.data;
        self.posts.list.forEach(function (post) {
          post.showComments = false;
          post.showAddComment = false;
          post.comments = [];
        });
        self.getComments();
      })
      .catch(function (error) {
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
        self.posts.list.forEach(post => {
          post.comments = response.data[post._id];
        });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  self.deletePost = function(post) {
    console.log('DELETE POST', post);
  };

  self.deleteComment = function(comment) {
    console.log('DELETE COMMENT', comment);
  };
}])