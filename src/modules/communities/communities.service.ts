import prisma from '../../config/database';
import { SlugUtil } from '../../utils/slug.util';
import {
  CreateCommunityRequest,
  UpdateCommunityRequest,
} from './communities.types';

export class CommunitiesService {
  /**
   * List all communities (admin view)
   */
  async listCommunities() {
    return prisma.community.findMany({
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        name: true,
        slug: true,
        description: true,
        logoUrl: true,
        contactEmail: true,
        createdAt: true,
        updatedAt: true,
        _count: {
          select: {
            submissions: true,
          },
        },
      },
    });
  }

  /**
   * Get single community by ID (admin view)
   */
  async getCommunity(id: string) {
    const community = await prisma.community.findUnique({
      where: { id },
      include: {
        _count: {
          select: {
            submissions: true,
          },
        },
      },
    });

    if (!community) {
      throw new Error('Community not found');
    }

    return community;
  }

  /**
   * Get public communities (frontend)
   * Returns: id, name, slug, logoUrl for dropdown
   */
  async getPublicCommunities() {
    return prisma.community.findMany({
      orderBy: { name: 'asc' }, // Alphabetical for dropdown
      select: {
        id: true,
        name: true,
        slug: true,
        description: true,
        logoUrl: true,
        createdAt: true,
        _count: {
          select: {
            submissions: true,
          },
        },
      },
    });
  }

  /**
   * Get single public community by slug (frontend)
   */
  async getPublicCommunityBySlug(slug: string) {
    const community = await prisma.community.findUnique({
      where: { slug },
      select: {
        id: true,
        name: true,
        slug: true,
        description: true,
        logoUrl: true,
        contactEmail: true,
        createdAt: true,
        _count: {
          select: {
            submissions: true,
          },
        },
      },
    });

    if (!community) {
      throw new Error('Community not found');
    }

    return community;
  }

  /**
   * Admin: Create community
   */
  async createCommunity(data: CreateCommunityRequest) {
    const { name, slug, description, logoUrl, contactEmail } = data;

    // Generate slug if not provided
    const finalSlug = slug || await SlugUtil.generateUnique(
      name,
      async (slug) => {
        const existing = await prisma.community.findUnique({ where: { slug } });
        return !!existing;
      }
    );

    // Validate email if provided
    if (contactEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(contactEmail)) {
        throw new Error('Invalid contact email address');
      }
    }

    // Create community
    const community = await prisma.community.create({
      data: {
        name,
        slug: finalSlug,
        description: description || null,
        logoUrl: logoUrl || null,
        contactEmail: contactEmail || null,
      },
    });

    return community;
  }

  /**
   * Admin: Update community
   */
  async updateCommunity(id: string, data: UpdateCommunityRequest) {
    const { name, slug, description, logoUrl, contactEmail } = data;

    // Check if community exists
    const community = await prisma.community.findUnique({
      where: { id },
    });

    if (!community) {
      throw new Error('Community not found');
    }

    // If updating slug, check uniqueness
    if (slug && slug !== community.slug) {
      const existing = await prisma.community.findUnique({
        where: { slug },
      });
      if (existing) {
        throw new Error('Slug already in use');
      }
    }

    // Validate email if provided
    if (contactEmail !== undefined && contactEmail !== null) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(contactEmail)) {
        throw new Error('Invalid contact email address');
      }
    }

    // Build update data object (only include provided fields)
    const updateData: any = {};
    if (name !== undefined) updateData.name = name;
    if (slug !== undefined) updateData.slug = slug;
    if (description !== undefined) updateData.description = description || null;
    if (logoUrl !== undefined) updateData.logoUrl = logoUrl || null;
    if (contactEmail !== undefined) updateData.contactEmail = contactEmail || null;

    return prisma.community.update({
      where: { id },
      data: updateData,
    });
  }

  /**
   * Admin: Delete community
   */
  async deleteCommunity(id: string) {
    const community = await prisma.community.findUnique({
      where: { id },
      include: {
        _count: {
          select: { submissions: true },
        },
      },
    });

    if (!community) {
      throw new Error('Community not found');
    }

    // Delete community (cascade will delete submissions)
    await prisma.community.delete({
      where: { id },
    });

    return {
      message: 'Community deleted successfully',
      deletedSubmissions: community._count.submissions,
    };
  }
}