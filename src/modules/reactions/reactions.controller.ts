import { Request, Response } from 'express';
import { ReactionsService } from './reactions.service';
import { ResponseUtil } from '../../utils/response.util';
import { getClientIp } from '../../utils/ip.util';
import { AddReactionRequest } from './reactions.types';

const reactionsService = new ReactionsService();

export class ReactionsController {
  async addReaction(req: Request, res: Response) {
    try {
      const { slug } = req.params;
      const { reactionType } = req.body as AddReactionRequest;
      const identifier = getClientIp(req);

      if (!reactionType) {
        return ResponseUtil.success(res, 'Reaction type is required', 400);
      }

      const result = await reactionsService.addReaction(slug, identifier, reactionType);
      return ResponseUtil.success(res, result, 201);
    } catch (error: any) {
      return ResponseUtil.error(res, error.message, 400);
    }
  }

  async removeReaction(req: Request, res: Response) {
    try {
      const { slug } = req.params;
      const identifier = getClientIp(req);

      const result = await reactionsService.removeReaction(slug, identifier);
      return ResponseUtil.success(res, result);
    } catch (error: any) {
      return ResponseUtil.error(res, error.message, 404);
    }
  }

  async getReactions(req: Request, res: Response) {
    try {
      const { slug } = req.params;
      const identifier = getClientIp(req);

      const result = await reactionsService.getReactions(slug, identifier);
      return ResponseUtil.success(res, result);
    } catch (error: any) {
      return ResponseUtil.error(res, error.message, 404);
    }
  }
}