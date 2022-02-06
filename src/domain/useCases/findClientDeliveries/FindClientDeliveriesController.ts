import { RequestHandler } from 'express';

import { prisma } from '../../../infra/database/prismaClient';
import { FindClientDeliveriesUseCase } from './FindClientDeliveriesUseCase';

export class FindClientDeliveriesController {
  handle: RequestHandler = async (request, response) => {
    const { id_client } = request;

    const findClientDeliveriesUseCase = new FindClientDeliveriesUseCase(prisma);

    const clientDeliveries = await findClientDeliveriesUseCase.execute(
      String(id_client),
    );

    return response.json(clientDeliveries);
  };
}
