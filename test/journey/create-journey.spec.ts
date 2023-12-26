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

  it('should get a response 400 when body format is incorrect', async () => {
    const journey = {
      id: 1,
      people: 2.3,
    };

    const response = await request(server).post('/journey').send(journey);

    expect(response.status).toBe(400);
  });

  it('should get a response 400 restriction of number people is not correct', async () => {
    const journey = {
      id: 1,
      people: 7,
    };

    const response = await request(server).post('/journey').send(journey);

    expect(response.status).toBe(400);
  });

  it('should get a response 202 when journey is accepted', async () => {
    const journey = {
      id: 1,
      people: 6,
    };

    const response = await request(server).post('/journey').send(journey);

    expect(response.status).toBe(202);
  });
});
