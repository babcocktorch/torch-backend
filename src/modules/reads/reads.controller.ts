import { Request, Response } from 'express';
import { ReadsService } from './reads.service'; 
import { ResponseUtil } from '../../utils/response.util'; 
import { getClientIp } from '../../utils/ip.util';

const readsService = new ReadsService();

export class ReadsController {
  async trackRead(req: Request, res: Response) {
    try {
      const { slug } = req.params;
      const ipAddress = getClientIp(req);

      const result = await readsService.trackRead(slug, ipAddress);
      return ResponseUtil.success(res, result, 201);
    } catch (error: any) {
      return ResponseUtil.error(res, error.message, 404);
    }
  }

  async getArticleStats(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const stats = await readsService.getArticleStats(id);
      return ResponseUtil.success(res, { stats });
    } catch (error: any) {
      return ResponseUtil.error(res, error.message, 404);
    }
  }
}