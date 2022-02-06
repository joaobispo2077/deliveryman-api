import { RequestHandler } from 'express';

import { prisma } from '../../../infra/database/prismaClient';
import { FindDeveliverymanDeliveriesUseCase } from './FindDeveliverymanDeliveriesUseCase';

export class FindDeveliverymanDeliveriesController {
  handle: RequestHandler = async (request, response) => {
    console.log('FindDeveliverymanDeliveriesController');
    const { id_deliveryman } = request;

    const findDeliverymanDeliveriesUseCase =
      new FindDeveliverymanDeliveriesUseCase(prisma);

    const deliveries = await findDeliverymanDeliveriesUseCase.execute(
      String(id_deliveryman),
    );

    return response.json(deliveries);
  };
}
