import { Deliveries, PrismaClient } from '@prisma/client';

interface ICreateDeliveryPayload {
  id_client: string;
  item_name: string;
}

export class CreateDeliveryUseCase {
  constructor(private readonly prisma: PrismaClient) {}
  async execute({
    id_client,
    item_name,
  }: ICreateDeliveryPayload): Promise<Deliveries> {
    const delivery = await this.prisma.deliveries.create({
      data: {
        id_client,
        item_name,
      },
    });

    return delivery;
  }
}
