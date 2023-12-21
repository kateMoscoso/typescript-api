import express, { Express, Request, Response  } from 'express';

const app: Express = express();

app.get('/status', (req: Request, res: Response) => {
    res.status(200).json();
  });

export default app;
