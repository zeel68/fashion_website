
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { ProductContext } from '../Context';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const { BASE_URL, STORE_ID } = useContext(ProductContext);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("access_token");

      const res = await axios.get(`${BASE_URL}/api/storefront/store/${STORE_ID}/orders?page=1&limit=10`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      }
      );

      setOrders(res.data.orders || res.data.data?.orders || []);
    } catch (err) {
      console.error("Failed to fetch orders:", err.message);
      setOrders([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) {
    return <div className="p-4">Loading orders...</div>;
  }

  if (!orders.length) {
    return <div className="p-4">No orders found.</div>;
  }

  return (
    <div className="p-4 max-w-screen-xxl mx-auto">
      <h2 className="text-[20px] text-[#555] font-semibold mb-4">
        My Orders ({orders.length})
      </h2>

      {orders.map((order, idx) => (
        <div key={order._id || idx} className="border border-[#ececec] p-4 rounded mb-6">
          <p className="text-sm text-gray-600">
            Date: {order.created_at ? new Date(order.created_at).toLocaleString() : "N/A"}
          </p>

          <div className="mt-4">
            {order.items?.map((item, index) => (
              <div key={index} className="flex justify-between items-center mb-3">
                <div className="flex items-center">
                  <img
                    src={item.product_id?.images?.[0]}
                    alt={item.product_id?.name}
                    className="w-[100px] h-[130px] object-cover mr-3"
                  />
                  <span>{item.product_id?.name} x {item.quantity}</span>
                </div>

                <div className="text-sm text-gray-500">
                  {order.shipping_address?.street},<br />
                  {order.shipping_address?.city},<br />
                  {order.shipping_address?.state}, {order.shipping_address?.country}
                </div>

                <div>
                  ₹{((item.price || 0) * (item.quantity || 0)).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 border-t border-[#ececec] pt-2 font-bold flex justify-end">
            Total: ₹{order.total || 0}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;

