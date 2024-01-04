import { Primitives } from '../shared/domain/Primitives';

export class Course {
  constructor(
    public id: string,
    public name: string,
    public duration: number,
  ) {}
  toPrimitives(): Primitives<Course> {
    return {
      id: this.id,
      name: this.name,
      duration: this.duration,
    };
  }
}
