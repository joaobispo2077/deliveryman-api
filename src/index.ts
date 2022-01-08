import { config } from './config';
import { app } from './infra/http/app';

const serverConfig = config.server;

app.listen(serverConfig.port, () => {
  console.log(`Server running on port ${serverConfig.port}`);
});
