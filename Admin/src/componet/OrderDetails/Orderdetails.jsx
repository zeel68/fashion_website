import React from 'react'
import { useParams } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";
import Breadcrum from '../Breadcrum/Breadcrum';
import { IoBagHandleOutline } from "react-icons/io5"
import { IoPrint } from "react-icons/io5";
import orders from '../OrderList/Orders';

const Orderdetails = () => {
    const { orderid } = useParams();
    const product = orders.find(p => p.orderId.toString() === orderid);

    if (!product) return <p className="p-5 text-red-500">Order not found</p>;

    return (
        <>
            <div className="max-w-screen-xxl mx-auto px-[15px]">

                <div className="py-[15px]">
                    <div className="md:mb-0">
                        <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
                        <Breadcrum
                            path={["Home", "All Product"]}
                            current="Order Details"
                        />
                    </div>
                </div>

                <div className="bg-white rounded-md p-[15px] shadow-md my-[20px]">
                    {/* Header */}
                    <div className="flex flex-wrap justify-between items-center mb-[15px]">
                        <h2 className="flex font-semibold text-lg mb-[5px]">
                            Orders ID: <td className="text-black">#{product.orderId}</td>
                            <span className="ml-[5px] text-xs text-black bg-[#FFA52FCC] px-[5px] py-[5px] rounded">Pending</span>
                        </h2>
                        <div className="flex items-center gap-6 ">
                            <select className="text-sm rounded px-[20px] p-[5px] bg-[#F0F6F9] shadow-md">
                                <option>Change Status</option>
                                <option>Delivered</option>
                                <option>Processing</option>
                            </select>
                            <button className="rounded px-[5px] p-[5px] text-sm hover:bg-gray-100 bg-[#F0F6F9] shadow-md"><IoPrint /></button>
                            <button className="rounded px-[5px] p-[5px] text-sm hover:bg-gray-100 bg-[#F0F6F9] shadow-md">save</button>
                        </div>
                    </div>

                    {/* order id */}
                    <p className="flex text-black mb-[15px] text-sm">
                        <FaRegCalendarAlt className="mr-[5px] text-base" />
                        Feb 16, 2022 - Feb 20, 2022</p>

                    <div className="lg:flex md:flex sm:block grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 py-[10px] ">
                        <div className="border rounded p-[10px] w-full mb-[10px]">
                            <p className="flex font-semibold mb-1">
                                <div className="items-center justify-center bg-[#00538A] rounded-md mr-[5px]">
                                    <IoBagHandleOutline className="icon text-3xl m-[3px] p-[5px] text-white" />
                                </div> Customer</p>
                            <div className="px-[40px]">
                                <p className='text-[#70706E] text-[16px]'>Full Name: Shristi Singh</p>
                                <p className='text-[#70706E] text-[16px]'>Email: shristi@gmail.com</p>
                                <p className='text-[#70706E] text-[16px]'>Phone: +91 904 231 1212</p>
                            </div>
                            <button className="mt-[10px] w-full bg-[#00538A] text-white text-sm py-[5px] rounded">View profile</button>
                        </div>

                        <div className="border rounded p-[10px] w-full">
                            <p className="flex font-semibold mb-1">
                                <div className="items-center justify-center bg-[#00538A] rounded-md mr-[5px]">
                                    <IoBagHandleOutline className="icon text-3xl m-[3px] p-[5px] text-white" />
                                </div> Order Info</p>
                            <div className="px-[40px]">
                                <p className='text-[#70706E] text-[16px]'>Shipping: Next express</p>
                                <p className='text-[#70706E] text-[16px]'>Payment Method: Paypal</p>
                                <p className='text-[#70706E] text-[16px]'>Status: <span >{product.status || "Pending"}</span></p>
                            </div>

                            <button className="mt-[10px] w-full bg-[#00538A] text-white text-sm py-[5px] rounded">Download info</button>
                        </div>

                        <div className="border rounded p-[10px] w-full">

                            <p className="flex font-semibold mb-1">
                                <div className=" items-center justify-center bg-[#00538A] rounded-md mr-[5px]">
                                    <IoBagHandleOutline className="icon text-3xl m-[3px] p-[5px] text-white" />
                                </div>Deliver to</p>
                            <div className="px-[40px]">
                                <p className='text-[#70706E] text-[16px]'>Address: Dharam Colony,</p>
                                <p className='text-[#70706E] text-[16px]'>Palam Vihar, Gurgaon,Haryana </p>
                            </div>
                            <button className="mt-[10px] w-full bg-[#00538A] text-white text-sm py-[5px] rounded">View profile</button>
                        </div>
                    </div>

                    {/* Payment  */}
                    <div className="lg:flex gap-4">
                        <div className="border rounded p-[10px] shadow-sm sm:w-[33%] lg:[100%] mb-[5px] ">
                            <p className="font-semibold mb-[5px]">Payment Info</p>
                            <p className="flex text-[#70706E]"><img className="w-[10%] h-[100%] mt-[8px] pr-[5px]" src="../../src/assets/Vector.png" alt="vector" /> Master Card **** 6557</p>
                            <p className="text-sm text-[#70706E]">Business name: Shristi Singh</p>
                        </div>
                        <div className=" pl-[5px] sm:w-[68%] lg:[100%]">
                            <label className="block text-sm font-medium">Note</label>
                            <textarea rows={3} placeholder="Type some notes" className="w-full rounded p-[5px] text-sm outline"></textarea>
                        </div>
                    </div>
                </div>


                {/* Products Table */}
                <div className="bg-white rounded-md p-[15px] shadow-md">
                    <h3 className="text-base font-semibold mb-[10px]">Products</h3>

                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm">
                            <thead className="text-gray-700 border-b border-[rgba(132,131,131,0.2)]">
                                <tr>
                                    <th className="p-[10px] text-left">Product Name</th>
                                    <th className="p-[10px] text-left">Order ID</th>
                                    <th className="p-[10px] text-left">Quantity</th>
                                    <th className="p-[10px] text-right ">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[1, 2, 3, 4].map((_, i) => (
                                    <tr key={i} className="border-b border-[rgba(132,131,131,0.2)]">
                                        <td className="p-[10px] flex items-center gap-2">
                                            <input type="checkbox" className="accent-[#00538A]" />
                                            <span>Lorem Ipsum</span>
                                        </td>
                                        <td className="p-[10px]">#{product.orderId}</td>
                                        <td className="p-[10px]">2</td>
                                        <td className="p-[10px] text-right">₹800.40</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Totals */}
                    <div className="flex justify-end mt-[15px] text-sm">
                        <div className="w-full max-w-sm space-y-2">
                            <div className="flex justify-between py-[5px]">
                                <span>Subtotal</span><span>₹3,201.60</span>
                            </div>
                            <div className="flex justify-between py-[5px]">
                                <span>Tax (20%)</span><span>₹640.32</span>
                            </div>
                            <div className="flex justify-between  py-[5px]">
                                <span>Discount</span><span>₹0</span>
                            </div>
                            <div className="flex justify-between  py-[5px]">
                                <span>Shipping Rate</span><span>₹0</span>
                            </div>
                            <hr />
                            <div className="flex justify-between font-semibold text-base  py-[5px]">
                                <span>Total</span><span>₹3841.92</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        </>
    )
}

export default Orderdetails

