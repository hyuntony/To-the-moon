import mongoose from 'mongoose';
 
const orderlistSchema = new mongoose.Schema(
  {
    symbol: {
      type: String,
      required: true,
    },
    quantity: {
        type: Number,
        required: true
    },
    action: {
        type: String,
        required: true
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true },
);

const Orderlist = mongoose.model('Orderlist', orderlistSchema);
 
export default Orderlist;