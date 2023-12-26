import { Request, Response } from 'express';
import { handleError } from './handle-error';

export function handleRoute(fn: (req: Request, res: Response) => any) {
  return async (req: Request, res: Response) => {
    try {
      await fn(req, res);
    } catch (exception) {
      return handleError(res);
    }
  };
}
