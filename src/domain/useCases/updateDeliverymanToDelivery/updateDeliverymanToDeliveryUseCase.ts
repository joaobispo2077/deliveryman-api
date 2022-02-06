import { Deliveries, PrismaClient } from '@prisma/client';

interface IUpdatePayload {
  id_deliveryman: string;
  id_delivery: string;
}

export class UpdateDeliverymanToDeliveryUseCase {
  constructor(private readonly prisma: PrismaClient) {}

  async execute({
    id_deliveryman,
    id_delivery,
  }: IUpdatePayload): Promise<Deliveries> {
    const delivery = await this.prisma.deliveries.update({
      where: { id: id_delivery },
      data: { id_deliveryman },
    });

    return delivery;
  }
}
