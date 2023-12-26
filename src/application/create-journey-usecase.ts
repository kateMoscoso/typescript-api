import { Journey, JourneyState } from '../domain/Journey';

export function createJourneyUseCase() {
  return async (journey: Journey): Promise<Journey> => {
    if (journey.people === 6) {
      journey.state = JourneyState.ACCEPTED;
    }

    return journey;
  };
}
