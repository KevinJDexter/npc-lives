app.service('ViewService', ['$http', function($http) {
  console.log('View Service loaded');

  var self = this;

  self.posts = {list: []};
  self.newComment = {
    comment: '',
    commentor: ''
  }

  // Gets the posts from the server
  // Populates a few extra fields
  self.getPosts = function () {
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

  // Adds a new comment to the post
  self.addComment = function (associatedPost) {
    self.newComment.target_post = associatedPost._id;
    $http({
      method: 'POST',
      url: '/comment',
      data: self.newComment
    })
      .then(function (response) {
        console.log(response);
        self.getComments();
        self.clearCommentInputs();
      })
      .catch(function (error) {
        console.log(error);
        alert('Must have a comment name and post');
      })
  }

  // Allows toggling of displaying the Add Comment field
  self.displayAddComment = function (postToDisplay, show) {
    self.posts.list.forEach(function (post) {
      post.showAddComment = false;
    })
    if (show) {
      postToDisplay.showAddComment = true;
    }
    self.clearCommentInputs();
  }

  // Clears input fields for new comments
  self.clearCommentInputs = function () {
    self.newComment.comment = '';
    self.newComment.commentor = '';
  }
}])