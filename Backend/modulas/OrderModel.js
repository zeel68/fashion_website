// modulas/OrderModel.js
import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  firstname: { type: String },
  lastname: { type: String },
  email: { type: String },
  address: {
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String,
    phone: String,
  },
  items: [
    {
      id: String,
      name: String,
      price: Number,
      quantity: Number,
    },
  ],
  amount: Number,
  sessionId: String,   // Stripe session ID (optional)
  paymentStatus: { type: String, default: 'pending' }, // or "paid"
}, { timestamps: true });

export default mongoose.model('Order', orderSchema);
