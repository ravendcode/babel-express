import request from 'supertest';
import app from '../../app';

const url = '/api/user';
const param = '1';
const urlParam = `${url}/${param}`;

describe('API', () => {
  describe(`GET ${url}`, () => {
    test('should respond status and data', async () => {
      const res = await request(app).get(url);
      expect(res.status).toEqual(200);
      expect(res.body.message).toEqual('getAll');
    });
  });
  describe(`POST ${url}`, () => {
    test('should respond status and data', async () => {
      const data = {
        username: 'Test',
        password: 'qwerty',
      };
      const res = await request(app)
        .post(url)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .send(data);
      expect(res.status).toEqual(400);
    });
  });
  describe(`GET ${urlParam}`, () => {
    test('should respond status and data', async () => {
      const res = await request(app).get(urlParam);
      expect(res.status).toEqual(200);
      expect(res.body.message).toEqual('getOne');
      expect(res.body.data).toEqual(param);
    });
  });
  describe(`PATCH ${urlParam}`, () => {
    test('should respond status and data', async () => {
      const data = {
        username: 'Bob',
      };
      const res = await request(app)
        .patch(urlParam)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .send(data);
      expect(res.status).toEqual(200);
      expect(res.body.message).toEqual('updateOne');
      expect(res.body.data).toHaveProperty('username');
      expect(res.body.data).toEqual(data);
    });
  });
  describe(`DELETE ${urlParam}`, () => {
    test('should respond status and data', async () => {
      const res = await request(app).del(urlParam);
      expect(res.status).toEqual(200);
      expect(res.body.message).toEqual('deleteOne');
    });
  });
});
