import React, { useEffect, useState } from 'react';
import Pprop from './Pprop';
import OrderList from '../OrderList/Orderlist';
import axios from 'axios';

const OrderTable = () => {

  const [Orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get("http://localhost:4040/api/order/list");
      if (response.data.success) {
        setOrders(response.data.data);
        console.log("Fetched Orders:", response.data.data);
      } else {
        toast.error("Failed to fetch orders");
      }
    } catch (err) {
      toast.error("Server error");
      console.error(err);
    }
  };

  const statusHandler = async (event, orderId) => {
    const newStatus = event.target.value;
    try {
      const response = await axios.post("http://localhost:4040/api/order/status", {
        orderId,
        status: newStatus
      });
      if (response.data.success) {
        toast.success("Order status updated");
        fetchAllOrders(); // refresh list after update
      } else {
        toast.error("Failed to update status");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="px-[15px] sm:p-6 max-w-screen-xxl mx-auto">
      <div className="bg-white rounded-md p-[15px] shadow-md">
        <p className="text-lg font-semibold mb-4">Recent Orders</p>
        <hr className="text-[#ddddda] py-[5px]" />
        <div className="overflow-x-auto">

          <div className="flex flex-wrap gap-4">
            {Orders.map((order, index) => (
              <div key={index} className="flex justify-between items-center text-[14px] bg-white p-[5px] rounded shadow w-full md:w-[48%] lg:w-[32%]">
                <img src="../src/assets/box.png" alt="img" className="w-[10%] h-90%] object-cover " />

                <div className="text-[14px] w-[40%]">
                  <p className="font-normal pb-[10px] flex flex-wrap">
                    {order.items.map((item, idx) => (
                      <span key={idx}>
                        {item.name}x{item.quantity}
                        {idx !== order.items.length - 1 && ", "}
                      </span>
                    ))}
                  </p>
                </div>

                <p className='w-[10%]'>Items: {order.items.length}</p>
                <p className='w-[10%]'>${order.amount}</p>
                <p className='w-[15%]'><span >&#x25cf;</span><b> {order.status}</b></p>

              </div>
            ))}
          </div>
        </div>


      </div>
    </div>

  );
};

export default OrderTable;

