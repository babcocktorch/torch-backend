import { Router } from 'express';
import { ReactionsController } from './reactions.controller';

const router = Router();
const reactionsController = new ReactionsController();

// Public endpoints
router.post('/:slug/react', (req, res) => reactionsController.addReaction(req, res));
router.delete('/:slug/react', (req, res) => reactionsController.removeReaction(req, res));
router.get('/:slug/reactions', (req, res) => reactionsController.getReactions(req, res));

export default router;