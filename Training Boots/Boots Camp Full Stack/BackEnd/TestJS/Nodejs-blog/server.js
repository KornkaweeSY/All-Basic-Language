const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

let posts = [];

app.get('/', (req, res) => {
    res.render('index', { posts });
});

app.get('/new-post', (req, res) => {
    res.render('new-post');
});

app.post('/new-post', (req, res) => {
    const { title, content } = req.body;
    const id = Date.now().toString();
    const newPost = { id, title, content };
    posts.push(newPost);
    res.redirect('/');
});

app.get('/edit-post/:id', (req, res) => {
    const postId = req.params.id;
    const post = posts.find(post => post.id === postId);
    res.render('edit-post', { post });
});

app.post('/edit-post/:id', (req, res) => {
    const postId = req.params.id;
    const { title, content } = req.body;
    const postIndex = posts.findIndex(post => post.id === postId);
    posts[postIndex] = { ...posts[postIndex], title, content };
    res.redirect('/');
});

app.post('/delete-post/:id', (req, res) => {
    const postId = req.params.id;
    posts = posts.filter(post => post.id !== postId);
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
