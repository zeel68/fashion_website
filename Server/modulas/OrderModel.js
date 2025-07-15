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
  sessionId: String,
  paymentStatus: { type: String, default: 'Pending' },

  status: { type: String, default: 'Processing' },
  date: { type: Date, default: Date.now() }

}, { timestamps: true });

export default mongoose.model('Order', orderSchema);
