const path = require('path');
const express = require('express');
const morgan = require('morgan');

const authorsRouter = require('./controllers/authors/authors.router');
const blogsRouter = require('./controllers/blogs/blogs.router');
const commentsRouter = require('./controllers/comments/comments.router');
const usersRouter = require('./controllers/users/users.router');


const app = express();

app.use(morgan('combined'));

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "..", "public")));


app.use('/authors' ,authorsRouter);
app.use('/blogs' ,blogsRouter);
app.use('/comments' ,commentsRouter);
app.use('/users' ,usersRouter);

/* In case you had a view 
    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, "..", "public", "index.html"))
    });
*/
module.exports = app;