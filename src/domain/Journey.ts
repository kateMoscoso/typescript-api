export class Journey {
  readonly id: number;
  readonly people: number;
  public state: JourneyState;

  constructor(id: number, people: number) {
    this.id = id;
    this.people = people;
    this.state = JourneyState.PENDING;
  }
}
export enum JourneyState {
  PENDING = 'pending',
  WAITING = 'waiting',
  ACCEPTED = 'accepted',
}
