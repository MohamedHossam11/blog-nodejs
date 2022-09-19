const express = require('express');
const { verifyToken } = require('../helpers/verifyToken');
const { verifyUser } = require('../helpers/verifyUser');
const { create_post, get_all_posts } = require('../../controllers/blog/posts');
const { create_comment } = require('../../controllers/blog/comments');
const router = express.Router();

router.get('/', verifyToken, verifyUser, get_all_posts);
router.post('/create_post', verifyToken, verifyUser, create_post);
router.post('/create_comment', verifyToken, verifyUser, create_comment);

module.exports = router;
export {};
