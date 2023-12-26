import { Response } from 'express';
import httpStatus from 'http-status';

export function handleError(res: Response) {
  return res.status(httpStatus.INTERNAL_SERVER_ERROR).json();
}
