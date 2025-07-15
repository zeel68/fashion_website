import React, { useState, useEffect } from 'react';
import Breadcrum from '../Breadcrum/Breadcrum';
import { FaRegCalendarAlt, FaAngleRight } from "react-icons/fa";
import { toast } from 'react-toastify';
import axios from 'axios';

const OrderList = () => {
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
                fetchAllOrders();
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
        <>
            <div className="py-[15px]">
                <div className="max-w-screen-xxl mx-auto px-[15px]">
                    <div className="flex md:flex-row justify-between md:items-center">
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800">Order List</h2>
                            <Breadcrum className="text-[#00538A]" current="Dashboard" />
                        </div>
                        <div className="left">
                            <div className="text-sm font-medium flex items-center text-gray-700">
                                <FaRegCalendarAlt className="mr-[5px] text-base" />
                                Oct 11, 2023 - Nov 11, 2023
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-md p-[15px] shadow-md mt-[10px]">
                        <p className="text-lg font-semibold mb-4">Recent Orders</p>
                        <hr className='text-[#ddddda] py-[5px]' />

                        <div className="flex flex-wrap gap-4">
                            {Orders.map((order, index) => (
                                <div key={index} className="flex justify-between items-start text-[14px] bg-white p-[10px] rounded shadow w-full md:w-[48%] lg:w-[32%]">
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

                                        <p className='text-gray-600'>{order.firstname} {order.lastname}</p>

                                        <div className='text-gray-600'>
                                            <p>{order.address.street},</p>
                                            <p>{order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}</p>
                                        </div>
                                        <p className='text-gray-600'>{order.address.phone}</p>
                                    </div>

                                    <p className='w-[10%]'>Items: {order.items.length}</p>
                                    <p className='w-[10%]'>${order.amount}</p>

                                    {
                                        (order.status === "Cancelled" || order.status === "Returned") ? (
                                            <p className={`px-3 py-1 rounded text-black text-sm font-semibold w-[20%] text-center
                                         ${order.status === "Cancelled" ? "text-red-500 " : "text-yellow-500"}`}>
                                                {order.status}
                                            </p>
                                        ) : (
                                            <select
                                                onChange={(event) => statusHandler(event, order._id)}
                                                value={order.status}
                                                className='border p-[10px] w-[15%] rounded-md'
                                            >
                                                <option value="processing">Processing</option>
                                                <option value="Out for Delivery">Out for Delivery</option>
                                                <option value="Delivered">Delivered</option>
                                            </select>
                                        )
                                    }

                                    {/* <select
                                        onChange={(event) => statusHandler(event, order._id)}
                                        value={order.status}
                                        className='border p-[10px] w-[15%] rounded-m'
                                    >
                                        <option value="processing">Processing</option>
                                        <option value="Out for Delivery">Out for Delivery</option>
                                        <option value="Delivered">Delivered</option>
                                       
                                    </select> */}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default OrderList;
