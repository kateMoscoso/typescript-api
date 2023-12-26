import { Express, Request, Response } from 'express';
import journeyRoutes from '../../journey/infrastructure/route';

function routes(app: Express) {
  app.get('/status', (req: Request, res: Response) => {
    res.status(200).json();
  });
  journeyRoutes(app);
}

export default routes;
