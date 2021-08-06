import mongoose from 'mongoose';
 
const orderSchema = new mongoose.Schema(
  {
    symbol: { type: String },
    price: { type: Number },
    shares: { type: Number },
    action: { type: String },
    open: { type: Boolean },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true },
);
 
const Message = mongoose.model('Message', orderSchema);
 
export default Message;