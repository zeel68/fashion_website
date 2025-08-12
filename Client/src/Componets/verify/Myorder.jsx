import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { ProductContext } from '../Context';

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const { BASE_URL, STORE_ID } = useContext(ProductContext);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("auth-token");
      const res = await axios.get(`${BASE_URL}/api/storefront/store/${STORE_ID}/orders/${id}`, {
        headers: {
          "auth-token": token
        }
      });
      setOrders(res.data.orders);
    } catch (err) {
      console.error("Failed to fetch orders:", err.message);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="p-4">
      <div className="  max-w-screen-xxl  mx-auto">
        <h2 className="text-xl font-bold mb-4">My Orders</h2>
        {orders.length === 0 ? (
          <p>No orders yet.</p>
        ) : (
          orders.map((order) => (
            <div key={order._id} className="border p-4 rounded mb-4">
              <p className="text-sm text-gray-600">Order ID: {order._id}</p>
              <p className="text-sm text-gray-600">Date: {new Date(order.createdAt).toLocaleString()}</p>
              <div className="mt-2">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span>{item.name} x {item.quantity}</span>
                    <span>₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>
              <div className="mt-2 text-sm text-gray-700">
                <p><strong>Address:</strong> {order.address.street}, {order.address.city}, {order.address.state} - {order.address.zipCode}</p>
                <p><strong>Phone:</strong> {order.address.phone}</p>
              </div>
              <div className="mt-2 font-semibold">
                Total: ₹{order.amount}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyOrder;
