const request = require('supertest');
const app = require('../src/app');
const { generateToken } = require('./auth.mock');

describe('Auth Routes', () => {

  it('POST /auth/register should register a user', async () => {
    const res = await request(app)
      .post('/auth/register')
      .send({ email: 'testuser@test.com', password: '123456' });

    expect(res.status).toBe(201);
    expect(res.body.message).toBe('User registered');
  });

  it('POST /auth/login should login a user and return JWT', async () => {

    await request(app)
      .post('/auth/register')
      .send({ email: 'testlogin@test.com', password: '123456' });

    const res = await request(app)
      .post('/auth/login')
      .send({ email: 'test@test.com', password: '123456' });

    expect(res.status).toBe(200);
    expect(res.body.token).toBeDefined();
  });

  it('should access protected route with mocked JWT', async () => {
    const token = generateToken('mockuser@test.com');

    const res = await request(app)
      .get('/protected')
      .set('Authorization', `Bearer ${token}`);

    expect(res.status).toBe(200);
    expect(res.body.secret).toBe('ok');
  });

});
