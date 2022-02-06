import { Router } from 'express';

import { AuthenticateClientController } from '../../../domain/useCases/authenticateClient/AuthenticateClientController';
import { AuthenticateDeliverymanController } from '../../../domain/useCases/authenticateDeliveryman/AuthenticateDeliverymanController';
import { CreateClientController } from '../../../domain/useCases/createClient/CreateClientController';
import { CreateDeliveryController } from '../../../domain/useCases/createDelivery/CreateDeliveryController';
import { CreateDeliverymanController } from '../../../domain/useCases/createDeliveryman/CreateDeliverymanController';
import { FindAllDeliveriesAvailableController } from '../../../domain/useCases/findAllDeliveriesAvailable/findAllDeliveriesAvailableController';
import { FindClientDeliveriesController } from '../../../domain/useCases/findClientDeliveries/FindClientDeliveriesController';
import { FindDeveliverymanDeliveriesController } from '../../../domain/useCases/findDeliverymanDeliveries/FindDeveliverymanDeliveriesController';
import { UpdateDeliverymanToDeliveryController } from '../../../domain/useCases/updateDeliverymanToDelivery/updateDeliverymanToDeliveryController';
import { ensureAuthenticateClient } from '../middlewares/ensureAuthenticateClient';
import { ensureAuthenticateDeliveryman } from '../middlewares/ensureAuthenticateDeliveryman';

const routes = Router();

// clients
const createClientController = new CreateClientController();
routes.post('/clients', createClientController.handle);

const authenticateClientController = new AuthenticateClientController();
routes.post('/sessions/clients', authenticateClientController.handle);

const findClientDeliveriesController = new FindClientDeliveriesController();
routes.get(
  '/clients/:id/deliveries',
  ensureAuthenticateClient,
  findClientDeliveriesController.handle,
);

// deliveryman
const createDeliverymanController = new CreateDeliverymanController();
routes.post('/deliveryman', createDeliverymanController.handle);

const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();
routes.post('/sessions/deliveryman', authenticateDeliverymanController.handle);

const findDelivymanDeliveriesController =
  new FindDeveliverymanDeliveriesController();
routes.get(
  '/deliveryman/:id/deliveries',
  ensureAuthenticateDeliveryman,
  findDelivymanDeliveriesController.handle,
);

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

const updateDeliverymanToDeliveryController =
  new UpdateDeliverymanToDeliveryController();
routes.patch(
  '/deliveries/:id_delivery/deliveryman',
  ensureAuthenticateDeliveryman,
  updateDeliverymanToDeliveryController.handle,
);

export { routes };
