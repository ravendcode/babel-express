import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from './app';

chai.use(chaiHttp);

describe('GET /', () => {
  it('should get response', async () => {
    const result = await chai.request(app).get('/');

    expect(result).to.have.status(200);
    expect(result).to.be.html;
  });
});

describe('GET /hello', () => {
  it('should get response', async () => {
    const result = await chai.request(app).get('/hello');

    expect(result).to.have.status(200);
    expect(result).to.be.html;
  });
});
