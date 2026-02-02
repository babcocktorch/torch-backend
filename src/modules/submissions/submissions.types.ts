// Submission
export interface Submission {
  id: string;
  communityId: string;
  authorName: string;
  authorContact: string;
  submissionType: 'news' | 'event' | 'announcement';
  title: string;
  content: string;
  eventDate: Date | null;
  mediaUrls: string | null; // JSON string
  status: 'pending' | 'reviewed' | 'rejected';
  reviewedAt: Date | null;
  reviewedBy: string | null;
  createdAt: Date;
}

// Create submission request
export interface CreateSubmissionRequest {
  communityId: string;
  authorName: string;
  authorContact: string;
  submissionType: 'news' | 'event' | 'announcement';
  title: string;
  content: string;
  eventDate?: string; // ISO string, required for events
  mediaUrls?: string[]; // Array of URLs
}

// Update submission status
export interface UpdateSubmissionStatusRequest {
  status: 'reviewed' | 'rejected';
}

// List filters
export interface SubmissionFilters {
  communityId?: string;
  status?: 'pending' | 'reviewed' | 'rejected';
  submissionType?: 'news' | 'event' | 'announcement';
}