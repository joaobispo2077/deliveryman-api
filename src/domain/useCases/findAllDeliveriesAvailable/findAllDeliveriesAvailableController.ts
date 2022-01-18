import { RequestHandler } from 'express';

import { prisma } from '../../../infra/database/prismaClient';
import { FindAllDeliveriesAvailabletUseCase } from './findAllDeliveriesAvailableUseCase';

export class FindAllDeliveriesAvailableController {
  handle: RequestHandler = async (request, response) => {
    const findAllDeliveriesAvailabletUseCase =
      new FindAllDeliveriesAvailabletUseCase(prisma);

    const deliveries = await findAllDeliveriesAvailabletUseCase.execute();

    return response.json(deliveries);
  };
}
