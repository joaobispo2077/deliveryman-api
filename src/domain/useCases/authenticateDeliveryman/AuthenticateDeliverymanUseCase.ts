import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { PrismaClient } from '@prisma/client';

import { UnauthorizedError } from '../../../application/errors/http';
import { config } from '../../../config';

const tokensConfig = config.tokens;

interface IAuthenticatDeliverymanPayload {
  username: string;
  password: string;
}

export class AuthenticateDeliverymanUseCase {
  constructor(private readonly prisma: PrismaClient) {}

  async execute({
    username,
    password,
  }: IAuthenticatDeliverymanPayload): Promise<string> {
    const deliveryman = await this.prisma.deliveryman.findUnique({
      where: {
        username,
      },
    });

    if (!deliveryman) {
      throw new UnauthorizedError(`Incorrect username or password.`);
    }

    const isCorrectPassword = await bcrypt.compare(
      password,
      deliveryman.password,
    );

    if (!isCorrectPassword) {
      throw new UnauthorizedError(`Incorrect username or password.`);
    }

    const token = jwt.sign({ username }, tokensConfig.accessTokenSecret, {
      expiresIn: tokensConfig.accessTokenExpiration,
      subject: deliveryman.id,
    });

    return token;
  }
}
