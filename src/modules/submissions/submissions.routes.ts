import { Router } from 'express';
import { SubmissionsController } from './submissions.controller';
import { authMiddleware } from '../../middleware/auth.middleware';

const router = Router();
const submissionsController = new SubmissionsController();

// Admin routes (protected)
router.get('/', authMiddleware, (req, res) =>
  submissionsController.listSubmissions(req, res)
);
router.get('/:id', authMiddleware, (req, res) =>
  submissionsController.getSubmission(req, res)
);
router.patch('/:id/status', authMiddleware, (req, res) =>
  submissionsController.updateSubmissionStatus(req, res)
);
router.delete('/:id', authMiddleware, (req, res) =>
  submissionsController.deleteSubmission(req, res)
);

export default router;