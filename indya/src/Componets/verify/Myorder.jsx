import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../Context'
import { useState } from 'react';
import axios from 'axios'
import { useEffect } from 'react';

const Myorder = () => {

  const { token } = useContext(ProductContext);
  const [data, setdata] = useState([]);
  const fetchOrders = async () => {
    const token = localStorage.getItem("auth-token");

    const response = await axios.post("http://localhost:4040/api/order/userorder", {}, { headers: { "auth-token": token } })
    setdata(response.data.data);
    // console.log("Order Data:", response.data.data);
    // console.log(response.data.data);
  }

  useEffect(() => {
    const token = localStorage.getItem("auth-token");

    const fetchData = async () => {
      if (token) {
        await fetchOrders();
      }
    };

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 1000);

    return () => clearInterval(interval);
  }, [token]);


  // return order
  const handleReturn = async (orderId) => {
    const reason = window.prompt("Enter the reason for return:");
    if (!reason) return toast.info("Return cancelled");

    try {
      const token = localStorage.getItem('auth-token');
      const response = await axios.post(
        'http://localhost:4040/api/order/return',
        { orderId, reason }, // send reason to backend
        { headers: { 'auth-token': token } }
      );

      if (response.data.success) {
        toast.success('Order Returned');
        fetchOrders();
      } else {
        toast.error('Failed to return order');
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong');
    }
  }

  // cancel order
  const handleCancel = async (orderId) => {
    const confirm = window.confirm("Are you sure you want to cancel this order?");
    if (!confirm) return;

    try {
      const token = localStorage.getItem('auth-token');
      const response = await axios.post(
        'http://localhost:4040/api/order/cancel',
        { orderId },
        { headers: { 'auth-token': token } }
      );

      if (response.data.success) {
        toast.success("Order Cancelled");
        fetchOrders();
      } else {
        toast.error("Failed to cancel order");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <div className='main py-[10px] bg-gray-50 min-h-screen'>
        <div className="max-w-screen-xxl mx-auto px-[15px]">
          <div className="inner-main flex flex-wrap gap-4 w-full">
            {
              data.map((order, index) => {
                return (
                  <div key={index} className="flex justify-between items-center bg-white p-4 rounded shadow w-full md:w-[48%] lg:w-[32%]">

                    <img src="/assets/img/box.png" alt="img" className="w-[5%] h-[100%] object-cover rounded mb-2" />
                    <p className="text-gray-700 text-sm mb-2 flex flex-wrap w-[40%]">
                      {
                        order.items.map((items, index) => {
                          if (index === order.items.length - 1) {

                            return items.name + "x" + items.quantity
                          } else {
                            return items.name + "x" + items.quantity + " , "
                          }
                        })
                      }
                    </p>
                    <p className="font-semibold mb-1 w-[10%]">${order.amount}.00</p>
                    <p className="text-gray-600 text-sm mb-2 w-[10%] ">Items: {order.items.length}</p>
                    <p className='w-[15%]'><b> {order.status}</b></p>
                    {/* <span >&#x25cf;</span> */}

                    {/* Return-Cancel orders */}
                    {(order.status === 'Delivered' || order.status === 'Out for Delivery') && (
                      <button
                        onClick={() => handleReturn(order._id)}
                        className="m-2 px-2 py-2 rounded text-sm w-[10%] bg-[#d4b952] hover:bg-blue-700 text-white"
                      >
                        Return Order
                      </button>
                    )}
                    {order.status === 'processing' && (
                      <button
                        onClick={() => handleCancel(order._id)}
                        className="m-2 px-2 py-2 rounded text-sm w-[10%] bg-[#d4b952] hover:bg-blue-700 text-white"
                      >
                        Cancel Order
                      </button>
                    )}


                  </div>
                )
              })
            }
          </div>
        </div>
      </div >
    </>

  )
}

export default Myorder