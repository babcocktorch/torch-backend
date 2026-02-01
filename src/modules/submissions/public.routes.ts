import { Router } from 'express';
import { SubmissionsController } from './submissions.controller';

const router = Router();
const submissionsController = new SubmissionsController();

// Public submission endpoint
router.post('/community', (req, res) =>
  submissionsController.createSubmission(req, res)
);

export default router;