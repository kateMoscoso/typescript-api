import express, { Express, Request, Response  } from 'express';
import middlewares from './infrastructure/middlewares';

const app: Express = express();

// middlewares
middlewares(app);

app.get('/status', (req: Request, res: Response) => {
    res.status(200).json();
  });

export default app;
