import express, { Express, urlencoded } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';

import cors from 'cors';

function middlewares(app: Express) {
  app.use(cors());
  app.use(express.json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true }));
  app.use(morgan('combined'));
  app.use(helmet.xssFilter());
  app.use(helmet.noSniff());
  app.use(helmet.hidePoweredBy());
  app.use(helmet.frameguard({ action: 'deny' }));
}

export default middlewares;
