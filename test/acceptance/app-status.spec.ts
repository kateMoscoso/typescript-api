import { Express } from 'express';
import app from '../../src/app';
import request from 'supertest';

let server: Express;
describe('Test status', () => {
  server = app;
  it('should get a response 200 from the server status', async () => {
    const response = await request(server).get('/status');

    expect(response.status).toBe(200);
  });
});
