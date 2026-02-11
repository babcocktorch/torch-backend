import prisma from "../../config/database";
import { sanityClient, ARTICLES_QUERY } from "../../config/sanity";
import { SanityArticle, SyncResult } from "./articles.types";

export class ArticlesService {
  /**
   * Fetch articles from Sanity and sync to database
   */
  async syncFromSanity(): Promise<SyncResult> {
  // Fetch articles from Sanity
  const sanityArticles: SanityArticle[] = await sanityClient.fetch(ARTICLES_QUERY);

  let created = 0;
  let updated = 0;

  for (const sanityArticle of sanityArticles) {
    const existingArticle = await prisma.article.findUnique({
      where: { sanityId: sanityArticle._id },
    });

    // Use 'let' for variables we may derive or reassign
    let isPost = sanityArticle.isPost === true? true : false;
    let type = isPost ? "post" : "opinion"; // lowercase for API response

    if (!existingArticle) {
      // Create new article
      await prisma.article.create({
        data: {
          sanityId: sanityArticle._id,
          title: sanityArticle.title,
          slug: sanityArticle.slug,
          author: sanityArticle.author || null,
          type,
          isPost,
          visibility: "private", // Default to private
          isEditorsPick: false,
          isFeaturedOpinion: false,
          lastSyncedAt: new Date(),
        },
      });
      created++;
    } else {
      // Update existing article metadata (preserve visibility and editor's pick)
      await prisma.article.update({
        where: { sanityId: sanityArticle._id },
        data: {
          title: sanityArticle.title,
          slug: sanityArticle.slug,
          author: sanityArticle.author || null,
          type,
          isPost,
          lastSyncedAt: new Date(),
        },
      });
      updated++;
    }
  }

  return {
    created,
    updated,
    total: sanityArticles.length,
  };
}


  /**
   * List all articles (admin view)
   */
  async listArticles() {
    return prisma.article.findMany({
      orderBy: { lastSyncedAt: "desc" },
      select: {
        id: true,
        sanityId: true,
        title: true,
        slug: true,
        author: true,
        type: true,
        isPost: true,
        visibility: true,
        isEditorsPick: true,
        isFeaturedOpinion: true,
        lastSyncedAt: true,
      },
    });
  }

  /**
   * Update article visibility
   */
  async updateVisibility(articleId: string, visibility: "public" | "private") {
    const article = await prisma.article.findUnique({
      where: { id: articleId },
    });

    if (!article) {
      throw new Error("Article not found");
    }

    return prisma.article.update({
      where: { id: articleId },
      data: { visibility },
    });
  }

  /**
   * Set article as Editor's Pick (exclusive - max three per time)
   * Only posts (type === 'post') can be set as Editor's Pick
   */
  async setEditorsPick(articleId: string) {
    const article = await prisma.article.findUnique({
      where: { id: articleId },
    });

    if (!article) {
      throw new Error("Article not found");
    }

    // Check if article is a post
    if (!article.isPost) {
      throw new Error("Only posts can be set as Editor's Pick");
    }

    // Check if article is already an Editor's Pick
    if (article.isEditorsPick) {
      throw new Error('This article is already an Editor\'s Pick');
    }

    // Use transaction to ensure atomicity
    return prisma.$transaction(async (tx: any) => {
      // Count current editor's picks
      const currentCount = await tx.article.count({
        where: { isEditorsPick: true },
      });

      // If we already have 3, find the oldest and remove it
      if (currentCount >= 3) {
        const oldestPick = await tx.article.findFirst({
          where: { isEditorsPick: true },
          orderBy: { lastSyncedAt: 'asc' }, // Oldest first
        });

        if (oldestPick) {
          await tx.article.update({
            where: { id: oldestPick.id },
            data: { isEditorsPick: false },
          });
        }
      }

      // Unset previous editor's pick
      // await tx.article.updateMany({
      //   where: { isEditorsPick: true },
      //   data: { isEditorsPick: false },
      // });

      // Set new editor's pick
      return tx.article.update({
        where: { id: articleId },
        data: { isEditorsPick: true },
      });
    });
  }

  /**
   * Remove article from Editor's Pick
   */
  async removeEditorsPick(articleId: string) {
    const article = await prisma.article.findUnique({
      where: { id: articleId },
    });

    if (!article) {
      throw new Error('Article not found');
    }

    if (!article.isEditorsPick) {
      throw new Error('This article is not an Editor\'s Pick');
    }

    return prisma.article.update({
      where: { id: articleId },
      data: { isEditorsPick: false },
    });
  }

  /**
   * Set article as Featured Opinion (exclusive - only one at a time)
   * Only opinions (type === 'opinion') can be set as Featured Opinion
   */
  async setFeaturedOpinion(articleId: string) {
    const article = await prisma.article.findUnique({
      where: { id: articleId },
    });

    if (!article) {
      throw new Error('Article not found');
    }

    // Check if article is an opinion
    if (article.type.toLowerCase() !== 'opinion') {
      throw new Error('Only opinions can be set as Featured Opinion');
    }

    // Use transaction to ensure atomicity
    return prisma.$transaction(async (tx) => {
      // Unset previous featured opinion
      await tx.article.updateMany({
        where: { isFeaturedOpinion: true },
        data: { isFeaturedOpinion: false },
      });

      // Set new featured opinion
      return tx.article.update({
        where: { id: articleId },
        data: { isFeaturedOpinion: true },
      });
    });
  }

  /**
   * Remove article from Featured Opinion
   */
  async removeFeaturedOpinion(articleId: string) {
    const article = await prisma.article.findUnique({
      where: { id: articleId },
    });

    if (!article) {
      throw new Error('Article not found');
    }

    if (!article.isFeaturedOpinion) {
      throw new Error('This article is not a Featured Opinion');
    }

    return prisma.article.update({
      where: { id: articleId },
      data: { isFeaturedOpinion: false },
    });
  }


  /**
   * Get public articles (for frontend)
   */
  async getPublicArticles() {
    return prisma.article.findMany({
      where: { visibility: "public" },
      orderBy: { lastSyncedAt: "desc" },
      select: {
        id: true,
        sanityId: true,
        title: true,
        slug: true,
        author: true,
        type: true,
        isPost: true,
        isEditorsPick: true,
        isFeaturedOpinion: true,
        lastSyncedAt: true,
      },
    });
  }

  /**
   * Get single public article by slug
   */
  async getPublicArticleBySlug(slug: string) {
    const article = await prisma.article.findUnique({
      where: { slug, visibility: "public" },
      select: {
        id: true,
        sanityId: true,
        title: true,
        slug: true,
        author: true,
        type: true,
        isPost: true,
        isEditorsPick: true,
        isFeaturedOpinion: true,
        lastSyncedAt: true,
      },
    });

    if (!article) {
      throw new Error("Article not found");
    }

    return article;
  }
}
