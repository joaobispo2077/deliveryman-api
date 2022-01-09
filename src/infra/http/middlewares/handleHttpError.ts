/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from 'express';

import { HttpError } from '../../../application/errors/http';

export const handleHttpErrorMiddleware = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const isHttpError = error instanceof HttpError;

  if (isHttpError) {
    const httpError = error as HttpError;
    const isHttpClientError =
      httpError.statusCode >= 400 && httpError.statusCode < 500;

    if (isHttpClientError) {
      return response.status(httpError.statusCode).json({
        message: httpError.message,
      });
    }

    return response.status(500).json({
      message: 'Internal server error',
    });
  }

  return response.status(500).json({
    message: 'Something went wrong.',
  });
};
