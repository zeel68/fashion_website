import React, { useEffect, useState } from 'react';
import Oprop from './Oprop';
import axios from 'axios';

const Ordercard = () => {
    const [Orders, setOrders] = useState([]);

    const fetchAllOrders = async () => {
        try {
            const response = await axios.get("http://localhost:4040/api/order/list");
            if (response.data.success) {
                setOrders(response.data.data);
            } else {
                console.error("Failed to fetch orders");
            }
        } catch (error) {
            console.error("Error fetching orders:", error);
        }
    };

    useEffect(() => {
        fetchAllOrders();
    }, []);

    // Filters
    const totalOrders = Orders.length;
    const activeOrders = Orders.filter(order => order.status === 'processing' || order.status === 'Out for Delivery').length;
    const completedOrders = Orders.filter(order => order.status === 'Delivered').length;
    const returnOrders = Orders.filter(order => order.status === 'Returned').length;

    return (
        <div className="block w-full">
            <div className="max-w-screen-xxl mx-auto px-[15px]">
                <div className="flex flex-wrap justify-around">
                    <Oprop text="Total Orders" count={totalOrders} pr="12.4%" comp="Compared to Oct 2023" />
                    <Oprop text="Active Orders" count={activeOrders} pr="8.2%" comp="Compared to Oct 2023" />
                    <Oprop text="Completed Orders" count={completedOrders} pr="5.5%" comp="Compared to Oct 2023" />
                    <Oprop text="Return Orders" count={returnOrders} pr="2.1%" comp="Compared to Oct 2023" />
                </div>
            </div>
        </div>
    );
};

export default Ordercard;
