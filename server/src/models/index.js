import mongoose from 'mongoose';
 
import User from './user.js';
import Order from './order.js';
import Watchlist from './watchlist.js';
 
const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });
};
 
const models = { User, Order, Watchlist };
 
export { connectDb };
 
export default models;