import cors from 'cors';
import express, { type NextFunction, type Request, type Response } from 'express';
import { env, getAllowedOrigins } from './config/env';
import { errorHandler } from './middleware/errorHandler';
import { notFoundHandler } from './middleware/notFound';
import { requestLogger } from './middleware/requestLogger';
import healthRoutes from './routes/health';

const app = express();
const allowedOrigins = getAllowedOrigins();

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }

      if (
        origin.startsWith('http://localhost') ||
        origin.startsWith('http://127.0.0.1') ||
        origin.startsWith('exp://')
      ) {
        callback(null, true);
        return;
      }

      callback(new Error('CORS origin not allowed'));
    },
    credentials: true,
  }),
);

app.use(express.json({ limit: '1mb' }));
app.use(requestLogger);

app.use(healthRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
  if (req.path === '/') {
    res.status(200).json({
      status: 'ok',
      service: 'shyam-job-api',
    });
    return;
  }

  next();
});

app.use(notFoundHandler);
app.use(errorHandler);

const port = env.port || 4000;

app.listen(port, () => {
  console.log(`Shyam Job API listening on http://localhost:${port}`);
});
