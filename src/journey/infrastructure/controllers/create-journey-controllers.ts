import { Request, Response } from 'express';
import { handleError } from '../http/handle-error';

export async function createJourneyController(req: Request, res: Response) {
  try {
    return res.status(200).json();
  } catch (err) {
    handleError(res);
  }
}
