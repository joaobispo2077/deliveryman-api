import 'dotenv/config';

const { PORT, ACCESS_TOKEN_SECRET } = process.env;

const server = {
  port: (PORT as unknown as number) || 3000,
};

const tokens = {
  accessTokenSecret: (ACCESS_TOKEN_SECRET as unknown as string) || '',
  accessTokenExpiration: '1d',
};

const config = {
  server,
  tokens,
};

export { config };
