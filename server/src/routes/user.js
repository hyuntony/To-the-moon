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

router.get('/user', async (req, res) => {
  const email = req.body.email
  const user = await models.User.findOne(email)
  res.json(user);
});

router.get('/history/:id', async ( req, res ) => {
  const userId = req.params.id

  const orders = await models.Order.find().where({ user: userId })
  return res.json(orders)
});
export default router;