# Newspaper Admin Backend - API Documentation

Complete API reference for the school newspaper backend system.

**Base URL:** `http://localhost:3000api/v2/`  
**Version:** 2.0.0  
**Last Updated:** January 4, 2026

---

## Quick Navigation

- [Authentication](#authentication) - Login, setup, logout
- [Articles](#articles) - Sanity sync, visibility, editor's pick
- [Communities](#communities) - Directory CRUD
- [Submissions](#submissions) - Community content submissions
- [Response Format](#standard-response-format)
- [Setup Guide](#setup-instructions)

---

## Authentication

All admin endpoints (`/admin/*`) require JWT authentication via the `Authorization` header:
```
Authorization: Bearer YOUR_JWT_TOKEN
```

### 1. Setup Password (First Login)

**POST** `/admin/auth/setup` - Public

First-time password setup for allowlisted admin emails.

**Request:**
```json
{
  "email": "admin@school.edu",     // Required: Must be pre-approved
  "password": "SecurePass123"      // Required: 8+ chars, 1 upper, 1 lower, 1 number
}
```

**Success (201):**
```json
{
  "success": true,
  "data": {
    "token": "eyJhbGc...",
    "admin": {
      "id": "uuid",
      "email": "admin@school.edu",
      "name": "Admin User"
    }
  }
}
```

**Errors:**
- `400` - Weak password or missing fields
- `403` - Email not allowlisted
- `400` - Account already activated

**cURL:**
```bash
curl -X POST http://localhost:3000/api/v2/admin/auth/setup \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@school.edu","password":"SecurePass123"}'
```

---

### 2. Login

**POST** `/admin/auth/login` - Public

Standard login after password is set.

**Request:**
```json
{
  "email": "admin@school.edu",
  "password": "SecurePass123"
}
```

**Success (200):**
```json
{
  "success": true,
  "data": {
    "token": "eyJhbGc...",
    "admin": { "id": "uuid", "email": "admin@school.edu", "name": "Admin User" }
  }
}
```

**Errors:**
- `401` - Invalid credentials
- `403` - Account not activated (password not set)

---

### 3. Get Current Admin

**GET** `/admin/auth/me` - Protected

Get currently authenticated admin details.

**Headers:** `Authorization: Bearer TOKEN`

**Success (200):**
```json
{
  "success": true,
  "data": {
    "admin": { "id": "uuid", "email": "admin@school.edu", "name": "Admin User" }
  }
}
```

**Errors:**
- `401` - Missing or invalid token

---

### 4. Logout

**POST** `/admin/auth/logout` - Protected

Logout (client-side token deletion).

**Headers:** `Authorization: Bearer TOKEN`

**Success (200):**
```json
{
  "success": true,
  "data": { "message": "Logged out successfully" }
}
```

---

## Articles

### 5. Sync from Sanity

**POST** `/admin/articles/sync` - Protected

Manual sync of articles from Sanity CMS.

**Headers:** `Authorization: Bearer TOKEN`

**Success (200):**
```json
{
  "success": true,
  "data": {
    "message": "Articles synced successfully",
    "created": 15,
    "updated": 25,
    "total": 40
  }
}
```

**Notes:**
- Fetches articles with `_type` in `["post", "opinion"]`
- Uses pagination (100 per batch)
- New articles default to `private`
- Updates metadata only, preserves visibility/editor's pick
- Auto-computes `isPost` from `_type === "post"`

---

### 6. List Articles (Admin)

**GET** `/admin/articles` - Protected

Get all articles with admin metadata.

**Headers:** `Authorization: Bearer TOKEN`

**Success (200):**
```json
{
  "success": true,
  "data": {
    "articles": [{
      "id": "uuid",
      "sanityId": "sanity-id",
      "title": "Article Title",
      "slug": "article-slug",
      "author": "John Doe",
      "type": "post",
      "isPost": true,
      "visibility": "public",
      "isEditorsPick": true,
      "lastSyncedAt": "2026-01-04T10:00:00Z"
    }]
  }
}
```

---

### 7. Update Visibility

**PATCH** `/admin/articles/:id/visibility` - Protected

Change article visibility.

**Headers:** `Authorization: Bearer TOKEN`  
**URL Params:** `id` (UUID)

**Request:**
```json
{
  "visibility": "public"  // "public" or "private"
}
```

**Success (200):**
```json
{
  "success": true,
  "data": { "article": { "id": "uuid", "visibility": "public", ... } }
}
```

**Errors:**
- `400` - Invalid visibility value
- `404` - Article not found

---

### 8. Set Editor's Pick

**POST** `/admin/articles/:id/editors-pick` - Protected

Set article as Editor's Pick (only ONE at a time, posts only).

**Headers:** `Authorization: Bearer TOKEN`  
**URL Params:** `id` (UUID)

**Success (200):**
```json
{
  "success": true,
  "data": {
    "message": "Article set as Editor's Pick",
    "article": { "id": "uuid", "isEditorsPick": true, ... }
  }
}
```

**Errors:**
- `404` - Article not found
- `400` - Only posts can be Editor's Pick (when `isPost === false`)

**Business Rules:**
- Only ONE article can be Editor's Pick
- Only articles with `type === "post"` allowed
- Previous pick automatically unset

---

### 9. Get Public Articles

**GET** `/articles` - Public

Get all public articles for frontend.

**Success (200):**
```json
{
  "success": true,
  "data": {
    "articles": [{
      "id": "uuid",
      "title": "Article Title",
      "slug": "article-slug",
      "author": "John Doe",
      "type": "post",
      "isPost": true,
      "isEditorsPick": true,
      "lastSyncedAt": "2026-01-04T10:00:00Z"
    }]
  }
}
```

**Notes:** Only returns `visibility === "public"` articles

---

### 10. Get Single Article

**GET** `/articles/:slug` - Public

Get single article by slug.

**URL Params:** `slug` (string)

**Success (200):**
```json
{
  "success": true,
  "data": { "article": { "id": "uuid", "slug": "article-slug", ... } }
}
```

**Errors:**
- `404` - Article not found or not public

---

### 11. Internal Sync (Cron)

**POST** `/internal/articles/sync` - Internal

Automated sync endpoint for cron jobs.

**Success:** Same as `/admin/articles/sync`

**Security:** Protect with IP allowlist or secret token in production

---

## Communities

### 12. List Communities (Public)

**GET** `/communities` - Public

Get all communities for dropdown selection.

**Success (200):**
```json
{
  "success": true,
  "data": {
    "communities": [{
      "id": "uuid",
      "name": "Robotics Club",
      "slug": "robotics-club",
      "description": "Building robots",
      "logoUrl": "https://example.com/logo.png",
      "createdAt": "2026-01-04T10:00:00Z",
      "_count": { "submissions": 12 }
    }]
  }
}
```

**Notes:** Ordered alphabetically for dropdowns

---

### 13. Get Community by Slug

**GET** `/communities/:slug` - Public

Get single community details.

**URL Params:** `slug` (string)

**Success (200):**
```json
{
  "success": true,
  "data": {
    "community": {
      "id": "uuid",
      "name": "Robotics Club",
      "slug": "robotics-club",
      "description": "Building robots",
      "logoUrl": "https://example.com/logo.png",
      "contactEmail": "robotics@school.edu",
      "createdAt": "2026-01-04T10:00:00Z",
      "_count": { "submissions": 12 }
    }
  }
}
```

**Errors:**
- `404` - Community not found

---

### 14. List Communities (Admin)

**GET** `/admin/communities` - Protected

Get all communities with admin metadata.

**Headers:** `Authorization: Bearer TOKEN`

**Success (200):**
```json
{
  "success": true,
  "data": {
    "communities": [{
      "id": "uuid",
      "name": "Robotics Club",
      "slug": "robotics-club",
      "description": "Building robots",
      "logoUrl": "https://example.com/logo.png",
      "contactEmail": "robotics@school.edu",
      "createdAt": "2026-01-04T10:00:00Z",
      "updatedAt": "2026-01-04T10:00:00Z",
      "_count": { "submissions": 12 }
    }]
  }
}
```

---

### 15. Get Community by ID (Admin)

**GET** `/admin/communities/:id` - Protected

Get single community by ID.

**Headers:** `Authorization: Bearer TOKEN`  
**URL Params:** `id` (UUID)

**Success (200):** Same structure as public endpoint with `updatedAt`

**Errors:**
- `404` - Community not found

---

### 16. Create Community

**POST** `/admin/communities` - Protected

Create a new community.

**Headers:** `Authorization: Bearer TOKEN`

**Request:**
```json
{
  "name": "Robotics Team",              // Required
  "slug": "robotics",                   // Optional: auto-generated if missing
  "description": "Building robots",     // Optional
  "logoUrl": "https://example.com/...", // Optional
  "contactEmail": "robotics@school.edu" // Optional: must be valid email
}
```

**Success (201):**
```json
{
  "success": true,
  "data": {
    "message": "Community created successfully",
    "community": {
      "id": "uuid",
      "name": "Robotics Team",
      "slug": "robotics",
      ...
    }
  }
}
```

**Errors:**
- `400` - Missing name or invalid email
- Slug auto-increments if duplicate (e.g., `robotics-2`)

---

### 17. Update Community

**PATCH** `/admin/communities/:id` - Protected

Update community (partial update).

**Headers:** `Authorization: Bearer TOKEN`  
**URL Params:** `id` (UUID)

**Request:**
```json
{
  "name": "Updated Name",        // Optional
  "slug": "updated-slug",        // Optional
  "description": "New desc",     // Optional: null to clear
  "logoUrl": "https://...",      // Optional: null to clear
  "contactEmail": "new@..."      // Optional: null to clear
}
```

**Success (200):**
```json
{
  "success": true,
  "data": {
    "message": "Community updated successfully",
    "community": { ... }
  }
}
```

**Errors:**
- `404` - Community not found
- `400` - Empty body, duplicate slug, or invalid email

**Notes:** Only provided fields are updated

---

### 18. Delete Community

**DELETE** `/admin/communities/:id` - Protected

Delete community (cascades to submissions).

**Headers:** `Authorization: Bearer TOKEN`  
**URL Params:** `id` (UUID)

**Success (200):**
```json
{
  "success": true,
  "data": {
    "message": "Community deleted successfully",
    "deletedSubmissions": 12
  }
}
```

**Errors:**
- `404` - Community not found

---

## Submissions

### 19. Submit Community Content

**POST** `/submissions/community` - Public

Submit community content (news/event/announcement).

**Request:**
```json
{
  "communityId": "uuid",                      // Required
  "authorName": "Jane Doe",                   // Required
  "authorContact": "jane@school.edu",         // Required: valid email
  "submissionType": "news",                   // Required: news|event|announcement
  "title": "We Won!",                         // Required
  "content": "Our team placed first...",      // Required
  "eventDate": "2026-05-15T18:00:00Z",        // Optional: required for events
  "mediaUrls": ["https://..."]                // Optional: array of URLs
}
```

**Success (201):**
```json
{
  "success": true,
  "data": {
    "message": "Submission received successfully",
    "submission": {
      "id": "uuid",
      "communityId": "uuid",
      "authorName": "Jane Doe",
      "authorContact": "jane@school.edu",
      "submissionType": "news",
      "title": "We Won!",
      "content": "Our team placed first...",
      "eventDate": null,
      "mediaUrls": "[\"https://...\"]",
      "status": "pending",
      "reviewedAt": null,
      "reviewedBy": null,
      "createdAt": "2026-01-04T10:00:00Z",
      "community": { "id": "uuid", "name": "Robotics Club", "slug": "robotics-club" }
    }
  }
}
```

**Errors:**
- `400` - Missing fields, invalid type, or invalid email
- `404` - Community not found
- `400` - Event date required for event type

**cURL:**
```bash
curl -X POST http://localhost:3000/api/v2/submissions/community \
  -H "Content-Type: application/json" \
  -d '{
    "communityId":"uuid",
    "authorName":"Jane Doe",
    "authorContact":"jane@school.edu",
    "submissionType":"news",
    "title":"We Won!",
    "content":"Our team placed first!",
    "mediaUrls":["https://example.com/photo.jpg"]
  }'
```

---

### 20. List Submissions (Admin)

**GET** `/admin/submissions` - Protected

Get all submissions with filtering.

**Headers:** `Authorization: Bearer TOKEN`

**Query Params:**
- `community_id` (UUID) - Filter by community
- `status` - `pending|reviewed|rejected`
- `submission_type` - `news|event|announcement`

**Success (200):**
```json
{
  "success": true,
  "data": {
    "submissions": [{
      "id": "uuid",
      "communityId": "uuid",
      "authorName": "Jane Doe",
      "submissionType": "news",
      "title": "We Won!",
      "status": "pending",
      "createdAt": "2026-01-04T10:00:00Z",
      "community": { "id": "uuid", "name": "Robotics Club", "slug": "robotics-club", "logoUrl": "..." }
    }],
    "filters": {
      "type": "community",
      "communityId": "uuid",
      "status": "pending"
    }
  }
}
```

**Errors:**
- `400` - Invalid filter values

**cURL:**
```bash
# All pending submissions
curl -X GET "http://localhost:3000/api/v2/admin/submissions?status=pending" \
  -H "Authorization: Bearer TOKEN"

# Community-specific
curl -X GET "http://localhost:3000/api/v2/admin/submissions?community_id=UUID" \
  -H "Authorization: Bearer TOKEN"
```

---

### 21. Get Submission by ID

**GET** `/admin/submissions/:id` - Protected

Get single submission details.

**Headers:** `Authorization: Bearer TOKEN`  
**URL Params:** `id` (UUID)

**Success (200):**
```json
{
  "success": true,
  "data": {
    "submission": {
      "id": "uuid",
      "communityId": "uuid",
      "authorName": "Jane Doe",
      "authorContact": "jane@school.edu",
      "submissionType": "news",
      "title": "We Won!",
      "content": "Full content here...",
      "eventDate": null,
      "mediaUrls": ["https://example.com/photo.jpg"],
      "status": "pending",
      "reviewedAt": null,
      "reviewedBy": null,
      "createdAt": "2026-01-04T10:00:00Z",
      "community": { "id": "uuid", "name": "Robotics Club", "slug": "robotics-club", "logoUrl": "..." }
    },
    "type": "community"
  }
}
```

**Errors:**
- `404` - Submission not found

**Notes:** `mediaUrls` parsed from JSON string to array

---

### 22. Update Submission Status

**PATCH** `/admin/submissions/:id/status` - Protected

Update submission status.

**Headers:** `Authorization: Bearer TOKEN`  
**URL Params:** `id` (UUID)

**Request:**
```json
{
  "status": "reviewed"  // "reviewed" or "rejected"
}
```

**Success (200):**
```json
{
  "success": true,
  "data": {
    "message": "Submission status updated",
    "submission": {
      "id": "uuid",
      "status": "reviewed",
      "reviewedAt": "2026-01-04T11:00:00Z",
      "reviewedBy": "admin-uuid",
      ...
    }
  }
}
```

**Errors:**
- `404` - Submission not found
- `400` - Invalid status (must be `reviewed` or `rejected`)

**Notes:** Auto-sets `reviewedAt` and `reviewedBy` (from JWT)

---

### 23. Delete Submission

**DELETE** `/admin/submissions/:id` - Protected

Delete a submission.

**Headers:** `Authorization: Bearer TOKEN`  
**URL Params:** `id` (UUID)

**Success (200):**
```json
{
  "success": true,
  "data": { "message": "Submission deleted successfully" }
}
```

**Errors:**
- `404` - Submission not found

---

## Standard Response Format

All endpoints follow this structure:

### Success
```json
{
  "success": true,
  "data": { ... }
}
```

### Error
```json
{
  "success": false,
  "error": "Error message"
}
```

### HTTP Status Codes
- `200` - Success
- `201` - Created
- `400` - Bad Request (validation)
- `401` - Unauthorized (auth required)
- `403` - Forbidden (not allowed)
- `404` - Not Found
- `500` - Internal Server Error

---

## Setup Instructions

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- Sanity CMS project

### Installation

```bash
# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env with your values

# Run migrations
npx prisma migrate dev
npx prisma generate

# Seed admin allowlist
npm run prisma:seed

# Start server
npm run dev
```

### Environment Variables

```env
DATABASE_URL="postgresql://user:pass@localhost:5432/newspaper_db"
JWT_SECRET="your-secret-key"
JWT_EXPIRES_IN="7d"
PORT=3000
NODE_ENV="development"
SANITY_PROJECT_ID="your-project-id"
SANITY_DATASET="production"
SANITY_API_VERSION="2023-05-03"
SANITY_TOKEN="your-token"
```

---

## Support

For issues or questions:
- Check this documentation first
- Review error messages (they're descriptive)
- Check server logs for details

**API Version:** 2.0.0  
**Last Updated:** January 4, 2026