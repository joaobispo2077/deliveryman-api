import { RequestHandler } from 'express';

import { prisma } from '../../../infra/database/prismaClient';
import { CreateClientUseCase } from './CreateClientUseCase';

export class CreateClientController {
  handle: RequestHandler = async (request, response) => {
    const { username, password } = request.body;

    const createClientUseCase = new CreateClientUseCase(prisma);
    const createdClient = await createClientUseCase.execute({
      username,
      password,
    });

    return response.status(201).json(createdClient);
  };
}
