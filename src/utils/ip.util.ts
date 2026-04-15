import { Request } from 'express';

/**
 * Extract IP address from request
 * Properly configures when trust proxy is active
 */
export const getClientIp = (req: Request): string => {
  return req.ip || req.socket.remoteAddress || 'unknown';
};