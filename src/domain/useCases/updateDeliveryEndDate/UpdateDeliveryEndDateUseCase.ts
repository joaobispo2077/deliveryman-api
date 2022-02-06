import { Deliveries, Prisma, PrismaClient } from '@prisma/client';

interface IUpdateDeliveriesEndDatePayload {
  id_deliveryman: string;
  id_delivery: string;
}

export class UpdateDeliveryEndDateUseCase {
  constructor(private readonly prisma: PrismaClient) {}

  async execute({
    id_deliveryman,
    id_delivery,
  }: IUpdateDeliveriesEndDatePayload): Promise<Prisma.BatchPayload> {
    const batchPayload = await this.prisma.deliveries.updateMany({
      where: {
        id_deliveryman,
        id: id_delivery,
      },
      data: {
        ended_at: new Date(),
      },
    });

    return batchPayload;
  }
}
