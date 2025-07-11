import React from 'react';
import Pprop from './Pprop';
import orders from '../OrderList/Orders';

const OrderTable = () => {
  return (
    <div className="px-[15px] sm:p-6 max-w-screen-xxl mx-auto">
      <div className="bg-white rounded-md p-[15px] shadow-md">
        <p className="text-lg font-semibold mb-4">Recent Orders</p>
        <hr className="text-[#ddddda] py-[5px]" />
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
              {orders.map((order, idx) => (
                <Pprop key={idx} {...order} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderTable;

