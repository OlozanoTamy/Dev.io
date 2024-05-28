import { Router } from 'express';
import { addPost, fetchRecentPosts, fetchUserPosts } from '../controllers/postController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = Router();

router.post('/', authMiddleware, addPost);
router.get('/recent', fetchRecentPosts);
router.get('/user/:userId', fetchUserPosts);

export default router;