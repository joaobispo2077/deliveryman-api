import bcrypt from 'bcrypt';

import { Clients, PrismaClient } from '@prisma/client';

import { ConflictError } from '../../../application/errors/http';

interface ICreateClientPayload {
  username: string;
  password: string;
}

export class CreateClientUseCase {
  constructor(private readonly prisma: PrismaClient) {}

  async execute({
    username,
    password,
  }: ICreateClientPayload): Promise<Clients> {
    const isClientExists = await this.prisma.clients.findUnique({
      where: { username },
    });

    if (isClientExists) {
      throw new ConflictError(`Client with username ${username}`);
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const createdClient = await this.prisma.clients.create({
      data: {
        username,
        password: hashPassword,
      },
    });

    return createdClient;
  }
}
