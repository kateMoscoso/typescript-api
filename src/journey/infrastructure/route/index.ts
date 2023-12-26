import { Router, Express } from 'express';

function journeyRoutes(app: Express) {
  const router = Router();
  app.use('/journey', router);
  router.post(
    '/',
    (req, res) => {
        return res.status(200).json();
      });

  router.all('/', (req, res) => {
    return res.status(400).json();
  });
}

export default journeyRoutes;
