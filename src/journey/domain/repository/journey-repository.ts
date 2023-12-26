import { Journey } from '../Journey';

export interface JourneyRepository {
  insert(journey: Journey): Promise<void>;
}
