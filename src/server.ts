import express, { Request, Response } from 'express';
import * as http from 'http';
import httpStatus from 'http-status';
import middlewares from './infrastructure/middlewares';
import registerRoutes from './infrastructure/routes';

export class Server {
  private express: express.Express;
  private port: string;
  private httpServer?: http.Server;

  constructor(port: string) {
    this.port = port;
    this.express = express();

    middlewares(this.express);

    registerRoutes(this.express);

    this.express.use((err: Error, req: Request, res: Response, next: Function) => {
      console.log(err);
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
    });
  }

  async listen(): Promise<void> {
    return new Promise(resolve => {
      this.httpServer = this.express.listen(this.port, () => {
        console.log(
          `  Mock Backend App is running at http://localhost:${this.port} in ${this.express.get('env')} mode`
        );
        console.log('  Press CTRL-C to stop\n');
        resolve();
      });
    });
  }

  getHTTPServer() {
    return this.httpServer;
  }

  async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close(error => {
          if (error) {
            return reject(error);
          }
          return resolve();
        });
      }

      return resolve();
    });
  }
}