import { Express } from 'express';
import app from '../../src/app';
import request from 'supertest';

let server: Express;

describe('Post /journey', () => {
  beforeEach(() => {
    server = app;
  });

  it('should get a response 200 from the server', async () => {
    const journey = {
      id: 1,
      people: 4,
    };

    const response = await request(server).post('/journey').send(journey);

    expect(response.status).toBe(200);
  });

});
