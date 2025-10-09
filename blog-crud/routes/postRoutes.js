const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Get all posts
router.get('/', async (req, res) => {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.render('index', { posts });
});

// New post form
router.get('/new', (req, res) => {
    res.render('new');
});

// Create new post
router.post('/', async (req, res) => {
    await Post.create(req.body.post);
    res.redirect('/posts');
});

// Show single post
router.get('/:id', async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.render('show', { post });
});

// Edit post form
router.get('/:id/edit', async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.render('edit', { post });
});

// Update post
router.put('/:id', async (req, res) => {
    await Post.findByIdAndUpdate(req.params.id, req.body.post);
    res.redirect(`/posts/${req.params.id}`);
});

// Delete post
router.delete('/:id', async (req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    res.redirect('/posts');
});

module.exports = router;
