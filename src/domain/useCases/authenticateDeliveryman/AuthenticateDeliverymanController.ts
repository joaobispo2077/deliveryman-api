import { RequestHandler } from 'express';

import { prisma } from '../../../infra/database/prismaClient';
import { AuthenticateDeliverymanUseCase } from './AuthenticateDeliverymanUseCase';

export class AuthenticateDeliverymanController {
  handle: RequestHandler = async (request, response) => {
    const { username, password } = request.body;

    const authenticateDeliverymantUseCase = new AuthenticateDeliverymanUseCase(
      prisma,
    );
    const accessToken = await authenticateDeliverymantUseCase.execute({
      username,
      password,
    });

    return response.json({ accessToken });
  };
}
