// Community Types - Simplified for Directory Use

export interface Community {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  logoUrl: string | null;
  contactEmail: string | null;
  category: string | null;
  memberCount: number;
  openToJoin: boolean;
  bannerURL: string | null;
  createdAt: Date;
}

// Admin: Create Community
export interface CreateCommunityRequest {
  name: string;
  slug?: string; // Optional, auto-generate if not provided
  description?: string;
  logoUrl?: string;
  contactEmail?: string;
  category?: string;
  openToJoin?: boolean;
  bannerURL?: string;
}

// Admin: Update Community
export interface UpdateCommunityRequest {
  name?: string;
  slug?: string;
  description?: string;
  logoUrl?: string;
  contactEmail?: string;
  category?: string;
  openToJoin?: boolean;
  bannerURL?: string;
}

// Public: Community List Item
export interface PublicCommunity {
  id: string;
  name: string;
  slug: string;
  logoUrl: string | null;
  category: string | null;
  openToJoin: boolean;
  memberCount: number;
}

// Public: Community Details
export interface PublicCommunityDetails {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  logoUrl: string | null;
  contactEmail: string | null;
  category: string | null;
  openToJoin: boolean;
  memberCount: number;
  bannerURL: string | null;
}