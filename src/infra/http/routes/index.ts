import { Router } from 'express';

import { AuthenticateClientController } from '../../../domain/useCases/authenticateClient/AuthenticateClientController';
import { AuthenticateDeliverymanController } from '../../../domain/useCases/authenticateDeliveryman/AuthenticateDeliverymanController';
import { CreateClientController } from '../../../domain/useCases/createClient/CreateClientController';
import { CreateDeliveryController } from '../../../domain/useCases/createDelivery/CreateDeliveryController';
import { CreateDeliverymanController } from '../../../domain/useCases/createDeliveryman/CreateDeliverymanController';
import { FindAllDeliveriesAvailableController } from '../../../domain/useCases/findAllDeliveriesAvailable/findAllDeliveriesAvailableController';
import { ensureAuthenticateClient } from '../middlewares/ensureAuthenticateClient';
import { ensureAuthenticateDeliveryman } from '../middlewares/ensureAuthenticateDeliveryman';

const routes = Router();

// clients
const createClientController = new CreateClientController();
routes.post('/clients', createClientController.handle);

const authenticateClientController = new AuthenticateClientController();
routes.post('/sessions/clients', authenticateClientController.handle);

// deliveryman
const createDeliverymanController = new CreateDeliverymanController();
routes.post('/deliveryman', createDeliverymanController.handle);

const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();
routes.post('/sessions/deliveryman', authenticateDeliverymanController.handle);

// deliveries

const createDeliveryController = new CreateDeliveryController();
routes.post(
  '/deliveries',
  ensureAuthenticateClient,
  createDeliveryController.handle,
);

const findAllDeliveriesAvailableController =
  new FindAllDeliveriesAvailableController();
routes.get(
  '/deliveries/available',
  ensureAuthenticateDeliveryman,
  findAllDeliveriesAvailableController.handle,
);

export { routes };
