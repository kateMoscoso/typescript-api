import { Router, Express, Request, Response } from 'express';
import httpStatus from 'http-status';
import createJourneyValidator from '../middlewares/validators/create-journey-validators';

function journeyRoutes(app: Express) {
  const router = Router();
  app.use('/journey', router);
  router.post(
    '/',
    createJourneyValidator(),
    (req: Request, res: Response) => {
        return res.status(httpStatus.OK).json();
      });

  router.all('/', (req, res) => {
    return res.status(httpStatus.BAD_REQUEST).json();
  });
}

export default journeyRoutes;
