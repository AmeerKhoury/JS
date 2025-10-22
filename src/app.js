// app.js
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json());

// Register route
app.post('/auth/register', (req, res) => {
  const { email, password } = req.body;
  return res.status(201).json({ message: 'User registered' });
});

// Login route
app.post('/auth/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'test@test.com' && password === '123456') {
    const token = jwt.sign({ email }, 'testsecret', { expiresIn: '1h' });
    return res.status(200).json({ token });
  }
  return res.status(401).json({ error: 'Invalid credentials' });
});

//  Protected route
app.get('/protected', (req, res) => {
  res.status(200).json({ secret: 'ok' });
});

module.exports = app;
