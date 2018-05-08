app.service('PostService', ['$http', function($http) {
  console.log('Post Service loaded');

  var self = this;

  self.newPost = {
    post: '',
    poster: '',
    location: ''
  };
  self.newComment = {
    comment: '',
    commentor: ''
  }
  self.posts = { list: [] };


  // Adds new post to the database
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
  };

  // Gets the posts from the server
  // Populates a few extra fields
  self.getPosts = function () {
    $http({
      method: 'GET',
      url: '/post'
    })
      .then(function (response) {
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
        self.displayAddComment ('', false); // This empty string guarantees that displayAddComment will not show any comment field
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

  // Deletes the selected post from the database
  self.deletePost = function(post) {
    $http({
      method: 'DELETE', 
      url: '/post',
      params: post
    })
      .then(function(response) {
        console.log(response);
        self.getPosts();
      })
      .catch(function(error) {
        console.log(error);
      })
  };

  // Deletes the selected comment from the database
  self.deleteComment = function(comment) {
    $http({
      method:'DELETE',
      url: '/comment',
      params: comment
    })
      .then(function(response) {
        console.log(response);
        self.getPosts();
      })
      .catch(function(error) {
        console.log(error);
      })
  };

  // clears inputs for Post page
  self.clearPostInputs = function () {
    self.newPost.post = '';
    self.newPost.poster = '';
    self.newPost.location = '';
  }
}])