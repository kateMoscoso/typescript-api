import { Express, Router } from 'express';
import { globSync } from 'glob';

function registerRoutes(app: Express) {
  const router = Router();
  app.use('/', router);
  console.log(__dirname);
  const routes = globSync(__dirname + '/**/*.route.*').filter(
    file => !file.endsWith('.map'),
  );
  routes.map(route => register(route, router));
}

function register(routePath: string, router: Router) {
  const route = require(routePath);
  route.register(router);
}

export default registerRoutes;
