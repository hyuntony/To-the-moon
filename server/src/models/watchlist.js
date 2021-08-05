import mongoose from 'mongoose';
 
const watchlistSchema = new mongoose.Schema(
  {
    symbol: {
      type: String,
      required: true,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true },
);

watchlistSchema.index({ symbol: 1, user: 1 }, { unique: true })
const Watchlist = mongoose.model('Watchlist', watchlistSchema);
 
export default Watchlist;