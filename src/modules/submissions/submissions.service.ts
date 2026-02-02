import prisma from '../../config/database';
import {
  CreateSubmissionRequest,
  UpdateSubmissionStatusRequest,
  SubmissionFilters,
} from './submissions.types';

export class SubmissionsService {
  /**
   * Create new submission (public endpoint)
   */
  async createSubmission(data: CreateSubmissionRequest) {
    const {
      communityId,
      authorName,
      authorContact,
      submissionType,
      title,
      content,
      eventDate,
      mediaUrls,
    } = data;

    // Verify community exists
    const community = await prisma.community.findUnique({
      where: { id: communityId },
    });

    if (!community) {
      throw new Error('Community not found');
    }

    // Validate event date for events
    if (submissionType === 'event' && !eventDate) {
      throw new Error('Event date is required for event submissions');
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(authorContact)) {
      throw new Error('Invalid email address');
    }

    // Create submission
    const submission = await prisma.submission.create({
      data: {
        communityId,
        authorName,
        authorContact,
        submissionType,
        title,
        content,
        eventDate: eventDate ? new Date(eventDate) : null,
        mediaUrls: mediaUrls ? JSON.stringify(mediaUrls) : null,
        status: 'pending',
      },
      include: {
        community: {
          select: {
            id: true,
            name: true,
            slug: true,
          },
        },
      },
    });

    return submission;
  }

  /**
   * List submissions with filters (admin)
   */
  async listSubmissions(filters: SubmissionFilters) {
    const { communityId, status, submissionType } = filters;

    const where: any = {};

    if (communityId) where.communityId = communityId;
    if (status) where.status = status;
    if (submissionType) where.submissionType = submissionType;

    return prisma.submission.findMany({
      where,
      include: {
        community: {
          select: {
            id: true,
            name: true,
            slug: true,
            logoUrl: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  /**
   * Get single submission (admin)
   */
  async getSubmission(id: string) {
    const submission = await prisma.submission.findUnique({
      where: { id },
      include: {
        community: {
          select: {
            id: true,
            name: true,
            slug: true,
            logoUrl: true,
          },
        },
      },
    });

    if (!submission) {
      throw new Error('Submission not found');
    }

    // Parse mediaUrls if exists
    const parsedSubmission = {
      ...submission,
      mediaUrls: submission.mediaUrls ? JSON.parse(submission.mediaUrls) : null,
    };

    return parsedSubmission;
  }

  /**
   * Update submission status (admin)
   */
  async updateSubmissionStatus(
    id: string,
    data: UpdateSubmissionStatusRequest,
    adminId: string
  ) {
    const submission = await prisma.submission.findUnique({
      where: { id },
    });

    if (!submission) {
      throw new Error('Submission not found');
    }

    return prisma.submission.update({
      where: { id },
      data: {
        status: data.status,
        reviewedAt: new Date(),
        reviewedBy: adminId,
      },
      include: {
        community: {
          select: {
            id: true,
            name: true,
            slug: true,
          },
        },
      },
    });
  }

  /**
   * Delete submission (admin)
   */
  async deleteSubmission(id: string) {
    const submission = await prisma.submission.findUnique({
      where: { id },
    });

    if (!submission) {
      throw new Error('Submission not found');
    }

    await prisma.submission.delete({
      where: { id },
    });

    return { message: 'Submission deleted successfully' };
  }
}