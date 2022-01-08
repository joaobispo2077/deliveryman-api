const { PORT } = process.env;

const server = {
  port: (PORT as unknown as number) || 3000,
};

const config = {
  server,
};

export { config };
