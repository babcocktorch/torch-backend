import { Router } from 'express';
import { CommentsController } from './comments.controller';

const router = Router();
const controller = new CommentsController();

// Public routes mounted at /api/v2/comments
router.post('/:slug', controller.addComment);
router.get('/:slug', controller.getComments);
router.get('/:slug/replies/:parentId', controller.getReplies);

export default router;
