import { Request } from 'express';

/**
 * Extract IP address from request
 * Handles proxies and load balancers
 */
export const getClientIp = (req: Request): string => {
  // Check X-Forwarded-For header (proxy/load balancer)
  const forwardedFor = req.headers['x-forwarded-for'];
  if (forwardedFor) {
    const ips = (forwardedFor as string).split(',');
    return ips[0].trim();
  }

  // Check X-Real-IP header (nginx)
  const realIp = req.headers['x-real-ip'];
  if (realIp) {
    return realIp as string;
  }

  // Fallback to socket remote address
  return req.socket.remoteAddress || 'unknown';
};