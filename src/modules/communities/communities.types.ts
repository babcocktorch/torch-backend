// Community Types - Simplified for Directory Use

export interface Community {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  logoUrl: string | null;
  contactEmail: string | null;
  createdAt: Date;
  updatedAt: Date;
}

// Admin: Create Community
export interface CreateCommunityRequest {
  name: string;
  slug?: string; // Optional, auto-generate if not provided
  description?: string;
  logoUrl?: string;
  contactEmail?: string;
}

// Admin: Update Community
export interface UpdateCommunityRequest {
  name?: string;
  slug?: string;
  description?: string;
  logoUrl?: string;
  contactEmail?: string;
}

// Public: Community List Item
export interface PublicCommunity {
  id: string;
  name: string;
  slug: string;
  logoUrl: string | null;
}

// Public: Community Details
export interface PublicCommunityDetails {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  logoUrl: string | null;
  contactEmail: string | null;
}