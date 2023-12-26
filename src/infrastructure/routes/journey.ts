import { Router, Express, Request, Response } from 'express';
import httpStatus from 'http-status';
import createJourneyValidator from '../middlewares/validators/create-journey-validators';
import { createJourneyController } from '../controllers/create-journey-controllers';
import { handleRoute } from '../http/handle-route';

function journeyRoutes(app: Express) {
  const router = Router();
  app.use('/journey', router);
  router.post(
    '/',
    createJourneyValidator(),
    handleRoute(createJourneyController),
  );

  router.all('/', (req, res) => {
    return res.status(httpStatus.BAD_REQUEST).json();
  });
}

export default journeyRoutes;
