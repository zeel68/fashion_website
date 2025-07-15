// === Backend File: controllers/orderController.js ===
import OrderModel from "../modulas/OrderModel.js";
import Stripe from "stripe";
import 'dotenv/config';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


const placeOrder = async (req, res) => {
  const frontend_url = "http://localhost:5173";

  try {
    // Ensure authenticated user ID is available
    if (!req.user || !req.user.id) {
      return res.status(401).json({ success: false, message: "Unauthorized: User not authenticated" });
    }

    const newOrder = new OrderModel({
      userId: req.user.id,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,

      status: req.body.status
    });

    await newOrder.save();

    const line_items = req.body.items.map(item => ({
      price_data: {
        currency: "aud",
        product_data: { name: item.name },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));

    // Add delivery charges (e.g., ₹2 ~ 200 cents AUD)
    line_items.push({
      price_data: {
        currency: "aud",
        product_data: { name: "Delivery Charges" },
        unit_amount: 200,
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({

      line_items,
      mode: "payment",
      success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
    });

    res.json({ success: true, session_id: session.id });
  } catch (error) {
    console.error("Stripe Error:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};

const verifyOrder = async (req, res) => {
  try {
    console.log("VERIFY BODY:", req.body);
    const { success, orderId } = req.body;

    if (success === "true") {
      // Optionally update the order's status in DB
      await OrderModel.findByIdAndUpdate(orderId, { paymentStatus: true });

      return res.json({ success: true, message: "Payment verified successfully." });
    } else {
      return res.json({ success: false, message: "Payment failed or was cancelled." });
    }
  } catch (err) {
    console.error("Verify Error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
};

// user order for fruntend

const userorder = async (req, res) => {
  try {
    const userId = req.user.id;
    const orders = await OrderModel.find({ userId });
    res.json({ success: true, data: orders })
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" })
  }
}

// listing Orders foradmin panel

const listOrders = async (req, res) => {
  try {
    const orders = await OrderModel.find({});
    res.json({ success: true, data: orders })
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" })
  }
}


// api for upadate order status
const updateStatus = async (req, res) => {
  try {
    await OrderModel.findByIdAndUpdate(req.body.orderId, { status: req.body.status })
    res.json({ success: true, massage: "status Updated" })
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" })
  }
}

// controllers/orderController.js
const returnOrder = async (req, res) => {
  try {
    const { orderId } = req.body;
    await OrderModel.findByIdAndUpdate(orderId, { status: 'Returned' });
    res.json({ success: true, message: 'Order marked as returned' });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: 'Something went wrong' });
  }
}


const cancelOrder = async (req, res) => {
  try {
    const { orderId } = req.body;
    await OrderModel.findByIdAndUpdate(orderId, { status: "Cancelled" });
    res.json({ success: true, message: "Order Cancelled" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Failed to cancel order" });
  }
};

export { placeOrder, verifyOrder, userorder, listOrders, updateStatus, returnOrder, cancelOrder };
