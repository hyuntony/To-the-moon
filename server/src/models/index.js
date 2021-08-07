import mongoose from 'mongoose';
 
import User from './user.js';
import Order from './order.js';
import Watchlist from './watchlist.js';
import Orderlist from './orderlist.js';
 
const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });
};
 
const models = { User, Order, Watchlist, Orderlist };
 
export { connectDb };
 
export default models;