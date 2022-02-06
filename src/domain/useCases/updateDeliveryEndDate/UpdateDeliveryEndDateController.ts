import { RequestHandler } from 'express';

import { prisma } from '../../../infra/database/prismaClient';
import { UpdateDeliveryEndDateUseCase } from './UpdateDeliveryEndDateUseCase';

export class UpdateDeliveryEndDateController {
  handle: RequestHandler = async (request, response) => {
    const { id_deliveryman } = request;
    const { id_delivery } = request.params;

    const updateDeliveryEndDateUseCase = new UpdateDeliveryEndDateUseCase(
      prisma,
    );

    await updateDeliveryEndDateUseCase.execute({
      id_deliveryman: String(id_deliveryman),
      id_delivery,
    });

    return response.status(204).send();
  };
}
