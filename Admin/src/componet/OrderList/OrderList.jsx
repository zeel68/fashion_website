import React, { useState } from 'react';
import Breadcrum from '../Breadcrum/Breadcrum';
import { FaRegCalendarAlt, FaAngleRight } from "react-icons/fa";
import Orderprop from './OrderProp';
import orders from './Orders';

const OrderList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const ordersPerPage = 8;

    const totalPages = Math.ceil(orders.length / ordersPerPage);
    const indexOfLast = currentPage * ordersPerPage;
    const indexOfFirst = indexOfLast - ordersPerPage;
    const currentOrders = orders.slice(indexOfFirst, indexOfLast);

    // drop down title
    const [menu, setmenu] = useState(false);
    const toggleShop = () => setmenu(!menu);

    return (
        <>
            <div className="py-[15px]">
                <div className="max-w-screen-xxl mx-auto px-[15px]">
                    <div className="flex md:flex-row justify-between md:items-center">
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800">Order List</h2>
                            <Breadcrum className="text-[#00538A]" current="Dashboard" />
                        </div>
                        <div className="left ">
                            <div className="text-sm font-medium flex items-center text-gray-700">
                                <FaRegCalendarAlt className="mr-[5px] text-base" />
                                Oct 11, 2023 - Nov 11, 2023
                            </div>

                            <div className="toggle py-[10px] w-full max-w-[200px]">
                                <div
                                    className="flex relative justify-between items-center cursor-pointer rounded-md shadow-md bg-white text-black px-[20px] py-[10px] hover:bg-gray-100"
                                    onClick={toggleShop}
                                >
                                    <p>Change Status</p>
                                    <i className="fa-solid fa-chevron-down text-[14px] font-semibold"></i>
                                </div>

                                {menu && (
                                    <div className="absolute z-10 mt-2 w-[15%] bg-white rounded-md shadow-lg border border-gray-200 transition-all duration-300 ease-in-out">
                                        <ul className="list-none divide-y divide-gray-200">
                                            <li className="px-[15px] py-[10px] hover:bg-[#00538A] hover:text-white cursor-pointer transition-all duration-300">Delivered</li>
                                            <li className="px-[15px] py-[10px] hover:bg-[#FFA52F] hover:text-white cursor-pointer transition-all duration-300">Canceled</li>
                                        </ul>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>

                    <div className="bg-white rounded-md p-[15px] shadow-md mt-4">
                        <p className="text-lg font-semibold mb-4">Recent Orders</p>
                        <hr className='text-[#ddddda] py-[5px]' />
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-sm text-left">
                                <thead className="border-b border-[#ddddda] font-medium text-[#232321CC]">
                                    <tr>
                                        <th></th>
                                        <th className="p-[15px]">Product</th>
                                        <th className="p-[15px]">Order ID</th>
                                        <th className="p-[15px]">Date</th>
                                        <th className="p-[15px]">Customer Name</th>
                                        <th className="p-[15px]">Status</th>
                                        <th className="p-[15px]">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentOrders.map((order, idx) => (
                                        <Orderprop key={idx} {...order} />
                                    ))}
                                </tbody>

                            </table>
                        </div>
                    </div>

                    {/* page 1 to ..10 */}
                    <div className="py-[20px] flex flex-wrap items-center">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`border px-[12px] py-[5px] m-[5px] rounded-md ${currentPage === page
                                    ? 'bg-[#00538A] text-white'
                                    : 'hover:bg-[#00538A] hover:text-white'
                                    }`}
                            >
                                {page}
                            </button>
                        ))}
                        {currentPage < totalPages && (
                            <button
                                onClick={() => setCurrentPage(currentPage + 1)}
                                className="border px-[15px] py-[5px] m-[5px] rounded-md hover:bg-[#00538A] hover:text-white flex items-center gap-1"
                            >
                                Next <FaAngleRight />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderList;
