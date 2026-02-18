import { Router } from 'express';
import { ReadsController } from './reads.controller';

const router = Router();
const readsController = new ReadsController();

// Public endpoint - track article read
router.post('/:slug/read', (req, res) => readsController.trackRead(req, res));

export default router;