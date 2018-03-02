import request from 'supertest';
import app from '../app';

// afterEach(() => {

// });

describe('GET /', () => {
  test('should respond status and type', async () => {
    const res = await request(app).get('/');
    expect(res.status).toEqual(200);
    expect(res.type).toEqual('text/html');
    // expect(res.text).toMatch(/index.html/);
  });
});


// import chai, { expect } from 'chai';
// import chaiHttp from 'chai-http';
// import app from '../app';

// chai.use(chaiHttp);

// describe('GET /', () => {
//   it('should get response', async () => {
//     const result = await chai.request(app).get('/');

//     expect(result).to.have.status(200);
//     expect(result).to.be.html;
//   });
// });

// describe('GET /hello', () => {
//   it('should get response', async () => {
//     const result = await chai.request(app).get('/hello');

//     expect(result).to.have.status(200);
//     expect(result).to.be.html;
//   });
// });
