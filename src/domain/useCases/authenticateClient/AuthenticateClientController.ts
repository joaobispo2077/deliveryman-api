import { RequestHandler } from 'express';

import { prisma } from '../../../infra/database/prismaClient';
import { AuthenticateClientUseCase } from './AuthenticateClientUseCase';

export class AuthenticateClientController {
  handle: RequestHandler = async (request, response) => {
    const { username, password } = request.body;

    const authenticateClientUseCase = new AuthenticateClientUseCase(prisma);
    const accessToken = await authenticateClientUseCase.execute({
      username,
      password,
    });

    return response.json({ accessToken });
  };
}
