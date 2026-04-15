import { Request, Response, NextFunction } from "express";
import { env } from "../config/env";

/**
 * Global error handling middleware
 */
export const errorMiddleware = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = (error as any).statusCode || 500;
  const isProduction = env.NODE_ENV === "production";

  const message =
    isProduction && statusCode === 500
      ? "Internal server error"
      : error.message || "Internal server error";

  res.status(statusCode).json({
    success: false,
    error: message,
  });
};
