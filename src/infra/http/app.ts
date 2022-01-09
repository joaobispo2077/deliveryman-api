import 'express-async-errors';
import express from 'express';

import { handleHttpErrorMiddleware } from './middlewares/handleHttpError';
import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
app.use(handleHttpErrorMiddleware);

export { app };
