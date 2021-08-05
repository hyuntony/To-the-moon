import express from 'express';
import models from '../models/index.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const users = await models.User.find({});
  res.json(users);
});

router.post('/login', async (req, res) => {
  const email = req.body.email
  const user = await models.User.findByLogin(email)
  
  res.json(user)
})

export default router;