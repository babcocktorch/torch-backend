import { Request, Response } from "express";
import { CommentsService } from "./comments.service";
import { ResponseUtil } from "../../utils/response.util";

const commentsService = new CommentsService();

export class CommentsController {
  /**
   * POST /api/v2/comments/:slug
   * Public: Add comment
   */
  async addComment(req: Request, res: Response) {
    try {
      const { slug } = req.params as { slug: string };
      const { body, parentId } = req.body;

      if (!body) {
        return ResponseUtil.error(res, "Comment body is required", 400);
      }

      const comment = await commentsService.addComment(slug, body, parentId);

      return ResponseUtil.success(
        res,
        {
          message: "Comment submitted successfully and is pending approval",
          comment,
        },
        201,
      );
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to add comment";

      if (message === "Article not found")
        return ResponseUtil.error(res, message, 404);
      if (
        message === "Comment body cannot be empty" ||
        message === "Cannot comment on non-public articles"
      ) {
        return ResponseUtil.error(res, message, 400);
      }

      return ResponseUtil.error(res, message, 500);
    }
  }

  /**
   * GET /api/v2/comments/:slug
   * Public: Get approved comments
   */
  async getComments(req: Request, res: Response) {
    try {
      const { slug } = req.params as { slug: string };
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;

      const result = await commentsService.getCommentsForArticle(slug, page, limit);

      return ResponseUtil.success(res, result, 200);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to get comments";

      if (message === "Article not found")
        return ResponseUtil.error(res, message, 404);
      if (message === "Cannot get comments for non-public articles")
        return ResponseUtil.error(res, message, 400);

      return ResponseUtil.error(res, message, 500);
    }
  }

  /**
   * GET /api/v2/comments/:slug/replies/:parentId
   * Public: Get paginated replies for a comment
   */
  async getReplies(req: Request, res: Response) {
    try {
      const { parentId } = req.params as { parentId: string };
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;

      const result = await commentsService.getRepliesForComment(parentId, page, limit);

      return ResponseUtil.success(res, result, 200);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to get replies";

      if (message === "Parent comment not found")
        return ResponseUtil.error(res, message, 404);

      return ResponseUtil.error(res, message, 500);
    }
  }

  /**
   * GET /api/v2/admin/comments
   * Admin: List all comments
   */
  async listAllComments(req: Request, res: Response) {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 20;
      const status = (req.query.status as string) || "all";

      const result = await commentsService.getAllComments(page, limit, status);
      return ResponseUtil.success(res, result, 200);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to list comments";
      return ResponseUtil.error(res, message, 500);
    }
  }

  /**
   * PATCH /api/v2/admin/comments/:id/status
   * Admin: Update comment status
   */
  async updateCommentStatus(req: Request, res: Response) {
    try {
      const { id } = req.params as { id: string };
      const { isApproved } = req.body;

      if (typeof isApproved !== "boolean") {
        return ResponseUtil.error(res, "isApproved must be a boolean", 400);
      }

      const comment = await commentsService.updateCommentStatus(id, isApproved);

      return ResponseUtil.success(
        res,
        {
          message: "Comment status updated",
          comment,
        },
        200,
      );
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to update comment";
      if (message === "Comment not found")
        return ResponseUtil.error(res, message, 404);
      return ResponseUtil.error(res, message, 500);
    }
  }

  /**
   * DELETE /api/v2/admin/comments/:id
   * Admin: Delete comment
   */
  async deleteComment(req: Request, res: Response) {
    try {
      const { id } = req.params as { id: string };
      const result = await commentsService.deleteComment(id);

      return ResponseUtil.success(res, result, 200);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to delete comment";
      if (message === "Comment not found")
        return ResponseUtil.error(res, message, 404);
      return ResponseUtil.error(res, message, 500);
    }
  }
}
