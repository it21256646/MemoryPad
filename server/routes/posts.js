import express from 'express';

import { getPosts,createPosts,updatePost,deletePost } from '../controllers/posts.js';

const router = express.Router();

//http://localhost:5000/posts

router.get('/',getPosts);
router.post('/',createPosts);
router.patch('/:id',updatePost);
router.delete('/:id',deletePost);



export default router;