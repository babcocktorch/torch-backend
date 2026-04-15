import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { env } from "./config/env";

import authRoutes from "./modules/auth/auth.routes";
import readRoutes from "./modules/reads/reads.routes";
import articleRoutes from "./modules/articles/articles.routes";
import publicArticleRoutes from "./modules/articles/public.routes";
import communityRoutes from "./modules/communities/communities.routes";
import publicCommunityRoutes from "./modules/communities/public.routes";
import submissionRoutes from "./modules/submissions/submissions.routes";
import publicSubmissionRoutes from "./modules/submissions/public.routes";
import publicReactionRoutes from "./modules/reactions/public.routes";
import publicReadRoutes from "./modules/reads/public.routes";
import { errorMiddleware } from "./middleware/error.middleware";

const app: Application = express();

// Security Trust Proxy for load balancers
app.set("trust proxy", 1);

// Middleware
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS configuration
const adminCors = cors({ origin: env.ADMIN_URL });
const publicCors = cors({ origin: "*" });

// Rate limiters
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
  message: {
    error: "Too many authentication attempts, please try again later.",
  },
});

const submissionLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 10,
  message: { error: "Too many submissions, please try again later." },
});

// Health check
app.get("/health", publicCors, (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Admin Routes (with restricted CORS)
app.use("/api/v2/admin", adminCors);
app.use("/api/v2/admin/auth", authLimiter, authRoutes);
app.use("/api/v2/admin/reads", readRoutes); // FIXED: Was incorrectly mounted as auth
app.use("/api/v2/admin/articles", articleRoutes);
app.use("/api/v2/admin/communities", communityRoutes);
app.use("/api/v2/admin/submissions", submissionRoutes);

// Public routes (with open CORS)
app.use("/api/v2", publicCors); // applying to all public routes
app.use("/api/v2/reads", publicReadRoutes);
app.use("/api/v2/articles", publicArticleRoutes);
app.use("/api/v2/reactions", publicReactionRoutes);
app.use("/api/v2/communities", publicCommunityRoutes);
app.use("/api/v2/submissions", submissionLimiter, publicSubmissionRoutes);

// Error handling middleware (must be last)
app.use(errorMiddleware);

export default app;
