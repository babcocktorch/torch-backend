import { Router } from 'express';
import { CommentsController } from './comments.controller';
import { authMiddleware } from '../../middleware/auth.middleware';

const router = Router();
const controller = new CommentsController();

// Admin routes mounted at /api/v2/admin/comments
router.use(authMiddleware);

router.get('/', controller.listAllComments);
router.patch('/:id/status', controller.updateCommentStatus);
router.delete('/:id', controller.deleteComment);

export default router;
