import { Router } from 'express';
import { CommunitiesController } from './communities.controller';

const router = Router();
const communitiesController = new CommunitiesController();

// Public community endpoints (no auth required)
router.get('/', (req, res) => 
  communitiesController.getPublicCommunities(req, res)
);
router.get('/:slug', (req, res) => 
  communitiesController.getPublicCommunityBySlug(req, res)
);

export default router;