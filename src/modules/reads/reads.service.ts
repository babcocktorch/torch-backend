import prisma from '../../config/database';
import { ReadStats, TrackReadResponse } from './reads.types';

export class ReadsService {
  /**
   * Track article read (with 24-hour debouncing per IP)
   */
  async trackRead(slug: string, ipAddress: string): Promise<TrackReadResponse> {
    // Find article by slug
    const article = await prisma.article.findUnique({
      where: { slug },
      select: { id: true, visibility: true },
    });

    if (!article) {
      throw new Error('Article not found');
    }

    if (article.visibility !== 'public') {
      throw new Error('Cannot track reads for non-public articles');
    }

    // Check if this IP has read this article in the last 24 hours
    const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const recentRead = await prisma.articleRead.findFirst({
      where: {
        articleId: article.id,
        ipAddress,
        readAt: { gte: twentyFourHoursAgo },
      },
    });

    if (recentRead) {
      return {
        tracked: false,
        message: 'Read already tracked in the last 24 hours',
      };
    }

    // Track the read
    await prisma.articleRead.create({
      data: {
        articleId: article.id,
        ipAddress,
      },
    });

    return {
      tracked: true,
      message: 'Read tracked successfully',
    };
  }

  /**
   * Get read statistics for an article (admin only)
   */
  async getArticleStats(articleId: string): Promise<ReadStats> {
    const article = await prisma.article.findUnique({
      where: { id: articleId },
    });

    if (!article) {
      throw new Error('Article not found');
    }

    const now = new Date();
    const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    // Total reads
    const totalReads = await prisma.articleRead.count({
      where: { articleId },
    });

    // Unique reads (distinct IPs)
    const uniqueReadsResult = await prisma.articleRead.groupBy({
      by: ['ipAddress'],
      where: { articleId },
    });
    const uniqueReads = uniqueReadsResult.length;

    // Reads in last 24 hours
    const readsLast24h = await prisma.articleRead.count({
      where: {
        articleId,
        readAt: { gte: twentyFourHoursAgo },
      },
    });

    // Reads in last 7 days
    const readsLast7d = await prisma.articleRead.count({
      where: {
        articleId,
        readAt: { gte: sevenDaysAgo },
      },
    });

    // Reads in last 30 days
    const readsLast30d = await prisma.articleRead.count({
      where: {
        articleId,
        readAt: { gte: thirtyDaysAgo },
      },
    });

    return {
      totalReads,
      uniqueReads,
      readsLast24h,
      readsLast7d,
      readsLast30d,
    };
  }
}