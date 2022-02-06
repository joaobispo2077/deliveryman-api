import { Deliveries, PrismaClient } from '@prisma/client';

export class FindDeveliverymanDeliveriesUseCase {
  constructor(private readonly prisma: PrismaClient) {}

  async execute(id_deliveryman: string): Promise<Deliveries[]> {
    const deliveries = await this.prisma.deliveries.findMany({
      where: {
        id_deliveryman,
      },
    });

    return deliveries;
  }
}
