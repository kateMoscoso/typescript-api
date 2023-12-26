import { Request, Response } from 'express';
import { handleError } from '../http/handle-error';
import httpStatus from 'http-status';
import { createJourneyUseCase } from '../../application/create-journey-usecase';
import { JourneyState } from '../../domain/Journey';

export async function createJourneyController(req: Request, res: Response) {
  const { body: journey } = req;
  try {
    const journeyCreated = await createJourneyUseCase()(journey);
    if (journeyCreated.state === JourneyState.ACCEPTED) {
      return res.status(httpStatus.ACCEPTED).json();
    }
    return res.status(httpStatus.OK).json();
  } catch (err) {
    handleError(res);
  }
}
