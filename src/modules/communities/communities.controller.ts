import { Request, Response } from 'express';
import { CommunitiesService } from './communities.service';
import { ResponseUtil } from '../../utils/response.util';
import {
  CreateCommunityRequest,
  UpdateCommunityRequest,
} from './communities.types';

const communitiesService = new CommunitiesService();

export class CommunitiesController {
  // ========== PUBLIC ENDPOINTS ==========

  /**
   * GET /communities
   * Public: List all communities (for dropdown in submission modal)
   * Returns: id, name, slug, logo_url
   */
  async getPublicCommunities(req: Request, res: Response) {
    try {
      const communities = await communitiesService.getPublicCommunities();
      return ResponseUtil.success(res, { communities }, 200);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to fetch communities';
      return ResponseUtil.error(res, message, 500);
    }
  }

  /**
   * GET /communities/:slug
   * Public: Get single community by slug
   */
  async getPublicCommunityBySlug(req: Request, res: Response) {
    try {
      const { slug } = req.params;
      const community = await communitiesService.getPublicCommunityBySlug(slug);
      return ResponseUtil.success(res, { community }, 200);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to fetch community';
      
      if (message === 'Community not found') {
        return ResponseUtil.error(res, message, 404);
      }
      
      return ResponseUtil.error(res, message, 500);
    }
  }

  // ========== ADMIN ENDPOINTS ==========

  /**
   * GET /admin/communities
   * Admin: List all communities
   */
  async listCommunities(req: Request, res: Response) {
    try {
      const communities = await communitiesService.listCommunities();
      return ResponseUtil.success(res, { communities }, 200);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to fetch communities';
      return ResponseUtil.error(res, message, 500);
    }
  }

  /**
   * GET /admin/communities/:id
   * Admin: Get community details
   */
  async getCommunity(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const community = await communitiesService.getCommunity(id);
      return ResponseUtil.success(res, { community }, 200);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to fetch community';
      
      if (message === 'Community not found') {
        return ResponseUtil.error(res, message, 404);
      }
      
      return ResponseUtil.error(res, message, 500);
    }
  }

  /**
   * POST /admin/communities
   * Admin: Create community
   */
  async createCommunity(req: Request, res: Response) {
    try {
      const data = req.body as CreateCommunityRequest;

      if (!data.name) {
        return ResponseUtil.error(res, 'Community name is required', 400);
      }

      const community = await communitiesService.createCommunity(data);
      return ResponseUtil.success(res, { 
        message: 'Community created successfully',
        community 
      }, 201);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to create community';
      
      if (message === 'Invalid contact email address') {
        return ResponseUtil.error(res, message, 400);
      }
      
      return ResponseUtil.error(res, message, 500);
    }
  }

  /**
   * PATCH /admin/communities/:id
   * Admin: Update community
   */
  async updateCommunity(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = req.body as UpdateCommunityRequest;

      // At least one field must be provided
      if (!data.name && !data.slug && data.description === undefined && 
          data.logoUrl === undefined && data.contactEmail === undefined) {
        return ResponseUtil.error(res, 'At least one field must be provided for update', 400);
      }

      const community = await communitiesService.updateCommunity(id, data);
      return ResponseUtil.success(res, { 
        message: 'Community updated successfully',
        community 
      }, 200);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to update community';
      
      if (message === 'Community not found') {
        return ResponseUtil.error(res, message, 404);
      }

      if (message === 'Slug already in use' || message === 'Invalid contact email address') {
        return ResponseUtil.error(res, message, 400);
      }
      
      return ResponseUtil.error(res, message, 500);
    }
  }

  /**
   * DELETE /admin/communities/:id
   * Admin: Delete community
   */
  async deleteCommunity(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result = await communitiesService.deleteCommunity(id);
      return ResponseUtil.success(res, result, 200);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to delete community';
      
      if (message === 'Community not found') {
        return ResponseUtil.error(res, message, 404);
      }
      
      return ResponseUtil.error(res, message, 500);
    }
  }
}
