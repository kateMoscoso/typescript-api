import { Router, Request, Response } from 'express';
import StatusGetController from '../controllers/GetStatusController';

export const register = (router: Router) => {
  const controller = new StatusGetController();
  router.get('/status', (req: Request, res: Response) =>
    controller.run(req, res)
  );
};
