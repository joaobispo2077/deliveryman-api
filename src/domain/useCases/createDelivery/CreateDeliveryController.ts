import { RequestHandler } from 'express';

import { prisma } from '../../../infra/database/prismaClient';
import { CreateDeliveryUseCase } from './CreateDeliveryUseCase';

export class CreateDeliveryController {
  handle: RequestHandler = async (request, response) => {
    const { item_name, id_client } = request.body;

    const createDeliveryUseCase = new CreateDeliveryUseCase(prisma);
    const createdDelivery = await createDeliveryUseCase.execute({
      item_name,
      id_client,
    });

    return response.status(201).json(createdDelivery);
  };
}
