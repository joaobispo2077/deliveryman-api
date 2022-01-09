import { Router } from 'express';

import { AuthenticateClientController } from '../../../domain/useCases/authenticateClient/AuthenticateClientController';
import { CreateClientController } from '../../../domain/useCases/createClient/CreateClientController';
import { CreateDeliverymanController } from '../../../domain/useCases/createDeliveryman/CreateDeliverymanController';

const routes = Router();

// clients
const createClientController = new CreateClientController();
routes.post('/clients', createClientController.handle);

const authenticateClientController = new AuthenticateClientController();
routes.post('/sessions/clients', authenticateClientController.handle);

// deliveryman
const createDeliverymanController = new CreateDeliverymanController();
routes.post('/deliveryman', createDeliverymanController.handle);

export { routes };
