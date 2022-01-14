import { Deliverires, PrismaClient } from '@prisma/client';

interface ICreateDeliveryPayload {
  id_client: string;
  item_name: string;
}

export class CreateDeliveryUseCase {
  constructor(private readonly prisma: PrismaClient) {}
  async execute({
    id_client,
    item_name,
  }: ICreateDeliveryPayload): Promise<Deliverires> {
    const delivery = await this.prisma.deliverires.create({
      data: {
        id_client,
        item_name,
      },
    });

    return delivery;
  }
}
