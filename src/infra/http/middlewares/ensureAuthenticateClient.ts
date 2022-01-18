import { RequestHandler } from 'express';
import jwt, { JsonWebTokenError } from 'jsonwebtoken';

import { UnauthorizedError } from '../../../application/errors/http';
import { config } from '../../../config';

const { accessTokenSecret } = config.tokens;

interface ITokenPayload {
  sub: string;
}

export const ensureAuthenticateClient: RequestHandler = async (
  request,
  response,
  next,
) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new UnauthorizedError('Token missing.');
  }

  const bearerToken = authHeader.replace('Bearer ', '');
  try {
    const { sub } = jwt.verify(bearerToken, accessTokenSecret) as ITokenPayload;
    console.info(`Client authenticated: ${sub}`);
    request.id_client = sub;
    return next();
  } catch (error) {
    console.error(error);
    if (error instanceof JsonWebTokenError) {
      throw new UnauthorizedError(`Invalid token, ${error.message}`);
    }
  }
};
