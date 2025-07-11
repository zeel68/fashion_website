import React from 'react';

const Pprop = ({ product, orderId, date, name, img, status, amount }) => {
  const statusDot = status === 'Delivered' ? 'bg-[#003F62]' : 'bg-[#FFA52F]';

  return (
    <tr className="border-b border-[#ddddda] hover:bg-gray-50 text-[#000000]">
      <td className="p-">
        <input type="checkbox" className="w-4 h-4" />
      </td>
      <td className="p-[15px]">{product}</td>
      <td className="p-[15px]">#{orderId}</td>
      <td className="p-[15px]">{date}</td>
      <td className="p-[15px]">
        <div className="flex items-center gap-2">
          {/* <img src={img} alt={name} className="w-6 h-6 rounded-full" /> */}
          <span>{name}</span>
        </div>
      </td>
      <td className="p-[15px]">
        <span className="flex items-center gap-1">
          <span className={`w-2 h-2 rounded-full ${statusDot}`}></span>
          <span className="font-medium">{status}</span>
        </span>
      </td>
      <td className="p-[15px]">{amount}</td>
    </tr>
  );
};

export default Pprop;
