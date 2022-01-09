import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { PrismaClient } from '@prisma/client';

import { UnauthorizedError } from '../../../application/errors/http';
import { config } from '../../../config';

const tokensConfig = config.tokens;

interface IAuthenticateClientPayload {
  username: string;
  password: string;
}
export class AuthenticateClientUseCase {
  constructor(private readonly prisma: PrismaClient) {}

  async execute({
    username,
    password,
  }: IAuthenticateClientPayload): Promise<string> {
    const client = await this.prisma.clients.findUnique({
      where: {
        username,
      },
    });

    if (!client) {
      throw new UnauthorizedError(`Incorrect username or password.`);
    }

    const isCorrectPassword = await bcrypt.compare(password, client.password);

    if (!isCorrectPassword) {
      throw new UnauthorizedError(`Incorrect username or password.`);
    }

    const token = jwt.sign({ username }, tokensConfig.accessTokenSecret, {
      expiresIn: tokensConfig.accessTokenExpiration,
      subject: client.id,
    });

    return token;
  }
}
