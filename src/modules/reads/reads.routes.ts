import { Router } from 'express';
import { ReadsController } from './reads.controller';
import { authMiddleware } from '../../middleware/auth.middleware';

const router = Router();
const readsController = new ReadsController();

// Admin endpoint - get article stats
router.get('/:id/stats', authMiddleware, (req, res) => readsController.getArticleStats(req, res));

export default router;