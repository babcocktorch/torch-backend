import { Router } from 'express';
import { ArticlesController } from './articles.controller';
import { authMiddleware } from '../../middleware/auth.middleware';

const router = Router();
const articlesController = new ArticlesController();

// Admin routes (protected)
router.post('/sync', authMiddleware, (req, res) => articlesController.syncArticles(req, res));
router.get('/', authMiddleware, (req, res) => articlesController.listArticles(req, res));
router.patch('/:id/visibility', authMiddleware, (req, res) => articlesController.updateVisibility(req, res));

// Editor's Pick routes
router.post('/:id/editors-pick', authMiddleware, (req, res) => articlesController.setEditorsPick(req, res));
router.delete('/:id/editors-pick', authMiddleware, (req, res) => articlesController.removeEditorsPick(req, res));

// Featured Opinion routes
router.post('/:id/featured-opinion', authMiddleware, (req, res) => articlesController.setFeaturedOpinion(req, res));
router.delete('/:id/featured-opinion', authMiddleware, (req, res) => articlesController.removeFeaturedOpinion(req, res));

export default router;