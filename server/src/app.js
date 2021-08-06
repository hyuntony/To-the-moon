const PORT = 3002;
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import dotenv from 'dotenv'
dotenv.config();

// database
import models, { connectDb } from './models/index.js';

// Initial seed functions
import { createUsers } from './seeds/create-users.js'

// Routers
import indexRouter from './routes/index.js';
import userRouter from './routes/user.js';
import finnRouter from './routes/finn.js';
import api_reqRouter from './routes/api_req.js'

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/finn', finnRouter);
app.use('/api', api_reqRouter);
 
const eraseDatabaseOnSync = true;

connectDb().then(async () => {
  if (eraseDatabaseOnSync) {
    await Promise.all([
      models.User.deleteMany({}),
      models.Watchlist.deleteMany({}),
      models.Message.deleteMany({}),
      models.Orderlist.deleteMany({}),
    ]);

    createUsers();
  }

  app.listen(PORT, () =>
    console.log(`Example app listening on port ${PORT}!`),
  );
});

