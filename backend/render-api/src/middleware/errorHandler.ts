import type { NextFunction, Request, Response } from 'express';
import type { ApiErrorBody } from '../types/api';

export function errorHandler(
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  const body: ApiErrorBody = {
    success: false,
    error: {
      code: 'INTERNAL_SERVER_ERROR',
      message: process.env.NODE_ENV === 'production'
        ? 'An unexpected error occurred.'
        : error.message,
    },
  };

  if (error.name === 'UnauthorizedError') {
    body.error.code = 'UNAUTHORIZED';
    body.error.message = 'Unauthorized';
  }

  res.status(500).json(body);
}
