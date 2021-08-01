import mongoose from 'mongoose';
 
import User from './user';
import Watchlist from './watchlist';
 
const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });
};
 
const models = { User, Watchlist };
 
export { connectDb };
 
export default models;