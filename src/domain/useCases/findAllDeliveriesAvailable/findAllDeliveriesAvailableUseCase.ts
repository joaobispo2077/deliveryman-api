import { Deliveries, PrismaClient } from '@prisma/client';

export class FindAllDeliveriesAvailabletUseCase {
  constructor(private readonly prisma: PrismaClient) {}

  async execute(): Promise<Deliveries[]> {
    const deliveries = await this.prisma.deliveries.findMany({
      where: {
        ended_at: null,
      },
    });

    return deliveries;
  }
}
