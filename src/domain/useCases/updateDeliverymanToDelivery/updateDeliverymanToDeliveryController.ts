import { RequestHandler } from 'express';

import { prisma } from '../../../infra/database/prismaClient';
import { UpdateDeliverymanToDeliveryUseCase } from './updateDeliverymanToDeliveryUseCase';

export class UpdateDeliverymanToDeliveryController {
  handle: RequestHandler = async (request, response) => {
    const { id_deliveryman } = request;
    const { id_delivery } = request.params;

    const updateDeliverymanToDelivery = new UpdateDeliverymanToDeliveryUseCase(
      prisma,
    );

    const updatedDelivery = await updateDeliverymanToDelivery.execute({
      id_deliveryman: String(id_deliveryman),
      id_delivery,
    });

    return response.json(updatedDelivery);
  };
}
