import mongoose from 'mongoose';
 
import User from './user.js';
import Message from './message.js';
import Watchlist from './watchlist.js';
 
const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });
};
 
const models = { User, Message, Watchlist };
 
export { connectDb };
 
export default models;