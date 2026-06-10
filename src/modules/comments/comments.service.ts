import prisma from "../../config/database";

export class CommentsService {
  /**
   * Add a new comment to an article (public endpoint)
   */
  async addComment(slug: string, body: string, parentId?: string) {
    if (!body || body.trim() === "") {
      throw new Error("Comment body cannot be empty");
    }

    const article = await prisma.article.findUnique({
      where: { slug },
      select: { id: true, visibility: true },
    });

    if (!article) {
      throw new Error("Article not found");
    }

    if (article.visibility !== "public") {
      throw new Error("Cannot comment on non-public articles");
    }

    const comment = await prisma.comment.create({
      data: {
        articleId: article.id,
        body,
        parentId: parentId || null,
        isApproved: false, // Moderated by default
      },
    });

    return comment;
  }

  /**
   * Get all approved top-level comments for an article (public endpoint)
   * Includes the first 3 replies for each comment and a total reply count.
   */
  async getCommentsForArticle(slug: string, page: number = 1, limit: number = 10) {
    const article = await prisma.article.findUnique({
      where: { slug },
      select: { id: true, visibility: true },
    });

    if (!article) {
      throw new Error("Article not found");
    }

    if (article.visibility !== "public") {
      throw new Error("Cannot get comments for non-public articles");
    }

    const skip = (page - 1) * limit;

    const [comments, totalComments] = await Promise.all([
      prisma.comment.findMany({
        where: { articleId: article.id, isApproved: true, parentId: null },
        include: {
          replies: {
            where: { isApproved: true },
            orderBy: { createdAt: "asc" },
            take: 3,
          },
          _count: {
            select: { replies: { where: { isApproved: true } } },
          },
        },
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
      }),
      prisma.comment.count({
        where: { articleId: article.id, isApproved: true, parentId: null },
      }),
    ]);

    // Format the response to hoist _count.replies to replyCount
    const formattedComments = comments.map(c => {
      const { _count, ...rest } = c;
      return {
        ...rest,
        replyCount: _count.replies,
      };
    });

    return { 
      comments: formattedComments, 
      totalComments, 
      hasMore: skip + comments.length < totalComments 
    };
  }

  /**
   * Get paginated replies for a specific parent comment (public endpoint)
   */
  async getRepliesForComment(parentId: string, page: number = 1, limit: number = 10) {
    const parent = await prisma.comment.findUnique({
      where: { id: parentId },
    });

    if (!parent) {
      throw new Error("Parent comment not found");
    }

    const skip = (page - 1) * limit;

    const [replies, totalReplies] = await Promise.all([
      prisma.comment.findMany({
        where: { parentId, isApproved: true },
        orderBy: { createdAt: "asc" },
        skip,
        take: limit,
      }),
      prisma.comment.count({
        where: { parentId, isApproved: true },
      }),
    ]);

    return {
      replies,
      totalReplies,
      hasMore: skip + replies.length < totalReplies,
    };
  }

  /**
   * Get all comments for moderation (admin endpoint)
   */
  async getAllComments(
    page: number = 1,
    limit: number = 20,
    status: string = "all",
  ) {
    const where: any = {};
    if (status === "approved") where.isApproved = true;
    else if (status === "pending") where.isApproved = false;

    const skip = (page - 1) * limit;

    const [comments, total] = await Promise.all([
      prisma.comment.findMany({
        where,
        include: {
          article: {
            select: { title: true, slug: true },
          },
          parent: {
            select: { body: true },
          },
        },
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
      }),
      prisma.comment.count({ where }),
    ]);

    return { comments, total, page, totalPages: Math.ceil(total / limit) };
  }

  /**
   * Update comment approval status (admin endpoint)
   */
  async updateCommentStatus(id: string, isApproved: boolean) {
    const comment = await prisma.comment.findUnique({ where: { id } });
    if (!comment) {
      throw new Error("Comment not found");
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
      throw new Error("Comment not found");
    }

    await prisma.comment.delete({ where: { id } });
    return { message: "Comment deleted successfully" };
  }
}
