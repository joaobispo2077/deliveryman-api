import { RequestHandler } from 'express';

import { UnprocessableEntityError } from '../../../application/errors/http';
import { prisma } from '../../../infra/database/prismaClient';
import { CreateDeliveryUseCase } from './CreateDeliveryUseCase';

export class CreateDeliveryController {
  handle: RequestHandler = async (request, response) => {
    const { item_name } = request.body;
    const { id_client } = request;

    if (!id_client) {
      throw new UnprocessableEntityError('Client ID is missing');
    }

    const createDeliveryUseCase = new CreateDeliveryUseCase(prisma);
    const createdDelivery = await createDeliveryUseCase.execute({
      item_name,
      id_client,
    });

    return response.status(201).json(createdDelivery);
  };
}
