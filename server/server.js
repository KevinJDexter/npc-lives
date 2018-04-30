const express = require('express');
const bodyParser = require('body-parser');
const CommentRouter = require('./routes/comment.router');
const PostRouter = require('./routes/post.router');
require('./modules/mongoose');

const app = express();
const PORT = process.env.PORT || 8001;

app.use(express.static('server/public'));
app.use(bodyParser.json());

app.use('/comment', CommentRouter);
app.use('/post', PostRouter);

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});