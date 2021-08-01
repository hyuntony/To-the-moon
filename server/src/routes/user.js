import express from 'express';
import models from '../models/index.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const users = await models.User.find({});
  res.json(users);
});

export default router;