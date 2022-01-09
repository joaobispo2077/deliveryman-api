import { RequestHandler } from 'express';

import { prisma } from '../../../infra/database/prismaClient';
import { CreateDeliverymanUseCase } from './CreateDeliverymanUseCase';

export class CreateDeliverymanController {
  handle: RequestHandler = async (request, response) => {
    const { username, password } = request.body;

    const createDeliverymanUseCase = new CreateDeliverymanUseCase(prisma);
    const createdDeliveryman = await createDeliverymanUseCase.execute({
      username,
      password,
    });

    return response.status(201).json(createdDeliveryman);
  };
}
