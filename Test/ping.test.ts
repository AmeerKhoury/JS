import request from 'supertest';
import express from 'express';

const app = express();
app.use(express.json());


// GET
app.get('/ping', (req, res) => {
  res.status(200).send('pong');
});

// POST 
app.post('/echo', (req, res) => {

  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }
  res.status(200).json({ echoed: message });
});

// TESTS
describe('API Tests', () => {

  // GET test
  describe('GET /ping', () => {
    it('should return pong', async () => {
      const response = await request(app).get('/ping');
      expect(response.status).toBe(200);
      expect(response.text).toBe('pong');
    });
  });

  // POST test
  describe('POST /echo', () => {
    it('return the echoed message', async () => {
      const response = await request(app)
        .post('/echo')
        .send({ message: 'First Post Test' });
      expect(response.status).toBe(200);
      expect(response.body).toEqual({ echoed: 'First Post Test' });
    });

    it('return 400 if message is missing', async () => {
      const response = await request(app)
        .post('/echo')
        .send({});
      expect(response.status).toBe(400);
      expect(response.body).toEqual({ error: 'Message is required' });
    });
  });

});

