import { Request, Response } from 'express';
import { SubmissionsService } from './submissions.service';
import { ResponseUtil } from '../../utils/response.util';
import {
  CreateSubmissionRequest,
  UpdateSubmissionStatusRequest,
  SubmissionFilters,
} from './submissions.types';

const submissionsService = new SubmissionsService();

export class SubmissionsController {
  /**
   * POST /submissions/community
   * Public: Submit community content
   */
  async createSubmission(req: Request, res: Response) {
    try {
      const data = req.body as CreateSubmissionRequest;

      // Validate required fields
      if (!data.communityId || !data.authorName || !data.authorContact ||
          !data.submissionType || !data.title || !data.content) {
        return ResponseUtil.error(
          res,
          'Missing required fields: communityId, authorName, authorContact, submissionType, title, content',
          400
        );
      }

      // Validate submission type
      if (!['news', 'event', 'announcement'].includes(data.submissionType)) {
        return ResponseUtil.error(
          res,
          'Invalid submission type. Must be: news, event, or announcement',
          400
        );
      }

      const submission = await submissionsService.createSubmission(data);

      return ResponseUtil.success(res, {
        message: 'Submission received successfully',
        submission,
      }, 201);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to create submission';

      if (message === 'Community not found') {
        return ResponseUtil.error(res, message, 404);
      }

      if (message === 'Event date is required for event submissions' ||
          message === 'Invalid email address') {
        return ResponseUtil.error(res, message, 400);
      }

      return ResponseUtil.error(res, message, 500);
    }
  }

  /**
   * GET /admin/submissions
   * Admin: List all submissions with filters
   */
  async listSubmissions(req: Request, res: Response) {
    try {
      const filters: SubmissionFilters = {
        communityId: req.query.community_id as string,
        status: req.query.status as any,
        submissionType: req.query.submission_type as any,
      };

      // Validate filters
      if (filters.status && !['pending', 'reviewed', 'rejected'].includes(filters.status)) {
        return ResponseUtil.error(res, 'Invalid status filter', 400);
      }

      if (filters.submissionType && !['news', 'event', 'announcement'].includes(filters.submissionType)) {
        return ResponseUtil.error(res, 'Invalid submission_type filter', 400);
      }

      const submissions = await submissionsService.listSubmissions(filters);

      return ResponseUtil.success(res, {
        submissions,
        filters: {
          type: 'community', // Always 'community' as per spec
          ...filters,
        },
      }, 200);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to fetch submissions';
      return ResponseUtil.error(res, message, 500);
    }
  }

  /**
   * GET /admin/submissions/:id
   * Admin: Get single submission
   */
  async getSubmission(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const submission = await submissionsService.getSubmission(id);

      return ResponseUtil.success(res, {
        submission,
        type: 'community', // Always 'community'
      }, 200);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to fetch submission';

      if (message === 'Submission not found') {
        return ResponseUtil.error(res, message, 404);
      }

      return ResponseUtil.error(res, message, 500);
    }
  }

  /**
   * PATCH /admin/submissions/:id/status
   * Admin: Update submission status
   */
  async updateSubmissionStatus(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = req.body as UpdateSubmissionStatusRequest;
      const adminId = (req as any).adminId; // From auth middleware

      if (!data.status || !['reviewed', 'rejected'].includes(data.status)) {
        return ResponseUtil.error(
          res,
          'Invalid status. Must be: reviewed or rejected',
          400
        );
      }

      const submission = await submissionsService.updateSubmissionStatus(id, data, adminId);

      return ResponseUtil.success(res, {
        message: 'Submission status updated',
        submission,
      }, 200);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to update submission';

      if (message === 'Submission not found') {
        return ResponseUtil.error(res, message, 404);
      }

      return ResponseUtil.error(res, message, 500);
    }
  }

  /**
   * DELETE /admin/submissions/:id
   * Admin: Delete submission
   */
  async deleteSubmission(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result = await submissionsService.deleteSubmission(id);

      return ResponseUtil.success(res, result, 200);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to delete submission';

      if (message === 'Submission not found') {
        return ResponseUtil.error(res, message, 404);
      }

      return ResponseUtil.error(res, message, 500);
    }
  }
}