import express, { Application } from 'express';
import cors from 'cors';
import authRoutes from './modules/auth/auth.routes';
import articleRoutes from './modules/articles/articles.routes';
import publicArticleRoutes from './modules/articles/public.routes';
import cronArticleRoutes from './modules/articles/cron.routes';
import communityRoutes from './modules/communities/communities.routes';
import publicCommunityRoutes from './modules/communities/public.routes';
import submissionRoutes from './modules/submissions/submissions.routes';
import publicSubmissionRoutes from './modules/submissions/public.routes';
import { errorMiddleware } from './middleware/error.middleware';

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Routes
app.use('/api/v2/admin/auth', authRoutes);
app.use('/api/v2/admin/articles', articleRoutes);
app.use('/api/v2/admin/communities', communityRoutes);
app.use('/api/v2/admin/submissions', submissionRoutes);
app.use('/api/v2/articles', publicArticleRoutes);
app.use('/api/v2/communities', publicCommunityRoutes);
app.use('/api/v2/submissions', publicSubmissionRoutes);
app.use('/api/v2/internal/articles', cronArticleRoutes);

// Error handling middleware (must be last)
app.use(errorMiddleware);

export default app;