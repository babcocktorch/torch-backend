import prisma from '../../config/database';
import { ReactionType, ReactionCounts, ReactionResponse } from './reactions.types';

export class ReactionsService {
  private readonly validReactionTypes: ReactionType[] = ['upvote', 'downvote'];

  /**
   * Add or update reaction to an article
   */
  async addReaction(slug: string, identifier: string, reactionType: ReactionType) {
    // Validate reaction type
    if (!this.validReactionTypes.includes(reactionType)) {
      throw new Error(`Invalid reaction type. Must be one of: ${this.validReactionTypes.join(', ')}`);
    }

    // Find article by slug
    const article = await prisma.article.findUnique({
      where: { slug },
      select: { id: true, visibility: true },
    });

    if (!article) {
      throw new Error('Article not found');
    }

    if (article.visibility !== 'public') {
      throw new Error('Cannot react to non-public articles');
    }

    // Upsert reaction (create if not exists, update if exists)
    const reaction = await prisma.reaction.upsert({
      where: {
        articleId_identifier: {
          articleId: article.id,
          identifier,
        },
      },
      create: {
        articleId: article.id,
        identifier,
        reactionType,
      },
      update: {
        reactionType,
      },
    });

    // Get updated reaction counts
    return this.getReactions(slug, identifier);
  }

  /**
   * Remove reaction from an article
   */
  async removeReaction(slug: string, identifier: string) {
    // Find article by slug
    const article = await prisma.article.findUnique({
      where: { slug },
      select: { id: true },
    });

    if (!article) {
      throw new Error('Article not found');
    }

    // Delete reaction
    await prisma.reaction.deleteMany({
      where: {
        articleId: article.id,
        identifier,
      },
    });

    // Get updated reaction counts
    return this.getReactions(slug, identifier);
  }

  /**
   * Get reaction counts for an article
   */
  async getReactions(slug: string, identifier?: string): Promise<ReactionResponse> {
    // Find article by slug
    const article = await prisma.article.findUnique({
      where: { slug },
      select: { id: true, visibility: true },
    });

    if (!article) {
      throw new Error('Article not found');
    }

    if (article.visibility !== 'public') {
      throw new Error('Cannot get reactions for non-public articles');
    }

    // Get all reactions for this article
    const reactions = await prisma.reaction.findMany({
      where: { articleId: article.id },
      select: { reactionType: true, identifier: true },
    });

    // Count reactions by type
    const counts: ReactionCounts = {
      upvote: 0,
      downvote: 0
    };

    let userReaction: ReactionType | null = null;

    reactions.forEach((reaction) => {
      const type = reaction.reactionType as ReactionType;
      if (this.validReactionTypes.includes(type)) {
        counts[type]++;
      }

      // Check if this is the current user's reaction
      if (identifier && reaction.identifier === identifier) {
        userReaction = type;
      }
    });

    const total = counts.upvote + counts.downvote;

    return {
      reactions: counts,
      total,
      userReaction,
    };
  }
}