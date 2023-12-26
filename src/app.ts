import express, { Express, Request, Response } from 'express';
import middlewares from './infrastructure/middlewares';
import routes from './infrastructure/routes';

const app: Express = express();

// middlewares
middlewares(app);

// routes
routes(app);

export default app;
