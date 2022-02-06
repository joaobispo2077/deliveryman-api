import { Deliveries, PrismaClient } from '@prisma/client';

export class FindClientDeliveriesUseCase {
  constructor(private readonly prisma: PrismaClient) {}

  async execute(id_client: string): Promise<Deliveries[]> {
    const deliveries = await this.prisma.deliveries.findMany({
      where: {
        id_client,
      },
    });

    return deliveries;
  }
}
