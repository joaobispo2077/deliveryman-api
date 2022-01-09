import bcrypt from 'bcrypt';

import { Deliveryman, PrismaClient } from '@prisma/client';

import { ConflictError } from '../../../application/errors/http';

interface ICreateDeliverymanPayload {
  username: string;
  password: string;
}

export class CreateDeliverymanUseCase {
  constructor(private readonly prisma: PrismaClient) {}

  async execute({
    username,
    password,
  }: ICreateDeliverymanPayload): Promise<Deliveryman> {
    const isDeliverymanExists = await this.prisma.deliveryman.findUnique({
      where: { username },
    });

    if (isDeliverymanExists) {
      throw new ConflictError(`Deliveryman with username ${username}`);
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const createdDeliveryman = await this.prisma.clients.create({
      data: {
        username,
        password: hashPassword,
      },
    });

    return createdDeliveryman;
  }
}
