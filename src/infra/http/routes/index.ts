import { Router } from 'express';

import { AuthenticateClientController } from '../../../domain/useCases/authenticateClient/AuthenticateClientController';
import { CreateClientController } from '../../../domain/useCases/createClient/CreateClientController';

const routes = Router();

const createClientController = new CreateClientController();
routes.post('/clients', createClientController.handle);

const authenticateClientController = new AuthenticateClientController();
routes.post('/sessions/clients', authenticateClientController.handle);

export { routes };
