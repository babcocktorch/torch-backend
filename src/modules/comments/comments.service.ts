import prisma from '../../config/database';

export class CommentsService {
  /**
   * Add a new comment to an article (public endpoint)
   */
  async addComment(slug: string, body: string) {
    if (!body || body.trim() === '') {
      throw new Error('Comment body cannot be empty');
    }

    const article = await prisma.article.findUnique({
      where: { slug },
      select: { id: true, visibility: true },
    });

    if (!article) {
      throw new Error('Article not found');
    }

    if (article.visibility !== 'public') {
      throw new Error('Cannot comment on non-public articles');
    }

    const comment = await prisma.comment.create({
      data: {
        articleId: article.id,
        body,
        isApproved: false, // Moderated by default
      },
    });

    return comment;
  }

  /**
   * Get all approved comments for an article (public endpoint)
   */
  async getCommentsForArticle(slug: string) {
    const article = await prisma.article.findUnique({
      where: { slug },
      select: { id: true, visibility: true },
    });

    if (!article) {
      throw new Error('Article not found');
    }

    if (article.visibility !== 'public') {
      throw new Error('Cannot get comments for non-public articles');
    }

    return prisma.comment.findMany({
      where: { articleId: article.id, isApproved: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  /**
   * Get all comments for moderation (admin endpoint)
   */
  async getAllComments() {
    return prisma.comment.findMany({
      include: {
        article: {
          select: { title: true, slug: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  /**
   * Update comment approval status (admin endpoint)
   */
  async updateCommentStatus(id: string, isApproved: boolean) {
    const comment = await prisma.comment.findUnique({ where: { id } });
    if (!comment) {
      throw new Error('Comment not found');
    }

    return prisma.comment.update({
      where: { id },
      data: { isApproved },
      include: {
        article: {
          select: { title: true, slug: true },
        },
      },
    });
  }

  /**
   * Delete comment (admin endpoint)
   */
  async deleteComment(id: string) {
    const comment = await prisma.comment.findUnique({ where: { id } });
    if (!comment) {
      throw new Error('Comment not found');
    }

    await prisma.comment.delete({ where: { id } });
    return { message: 'Comment deleted successfully' };
  }
}
