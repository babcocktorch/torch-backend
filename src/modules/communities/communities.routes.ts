import { Router } from 'express';
import { CommunitiesController } from './communities.controller';
import { authMiddleware } from '../../middleware/auth.middleware';

const router = Router();
const communitiesController = new CommunitiesController();

// Admin Community CRUD (all protected)
router.post('/', authMiddleware, (req, res) => 
  communitiesController.createCommunity(req, res)
);
router.get('/', authMiddleware, (req, res) => 
  communitiesController.listCommunities(req, res)
);
router.get('/:id', authMiddleware, (req, res) => 
  communitiesController.getCommunity(req, res)
);
router.patch('/:id', authMiddleware, (req, res) => 
  communitiesController.updateCommunity(req, res)
);
router.delete('/:id', authMiddleware, (req, res) => 
  communitiesController.deleteCommunity(req, res)
);

export default router;