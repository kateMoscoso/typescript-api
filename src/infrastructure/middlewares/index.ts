import express, { Express, urlencoded } from 'express';

import cors from 'cors';

function middlewares(app: Express) {
  app.use(cors());
  app.use(express.json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true }));
}

export default middlewares;
