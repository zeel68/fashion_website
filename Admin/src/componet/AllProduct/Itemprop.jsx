import React from 'react';
import { BsThreeDots } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Itemprop = ({ id, img, info, name, price, details, sales, remaining, total = 100 }) => {
    const navigate = useNavigate();

    const handleRowClick = () => {
        console.log("Navigating to:", `/home/product/${id}`);
        navigate(`/home/product/${id}`);
        window.scrollTo(0, 0);
    };

    const percentage = (remaining / total) * 100;

    return (
        <>
            <div className="main" onClick={handleRowClick}>
                <div className="w-full p-[15px] bg-white shadow-md rounded" >

                    <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-4">
                            <img className='w-[60px] h-[60px] p-[5px] object-contain bg-[#E0EAF1]' src={img} alt={name} />
                            <div>
                                <h2 className="font-medium text-gray-800">{info}</h2>
                                <p className="text-xs text-gray-600">{name}</p>
                                <h3 className="text-black font-medium">{price}</h3>
                            </div>
                        </div>
                        <div className="bg-[#E0EAF1] p-[5px] h-[30px] rounded-md cursor-pointer">
                            <BsThreeDots />
                        </div>
                    </div>

                    <div className="py-[10px]">
                        <h2 className='text-[14px] font-medium'>Summary</h2>
                        <p className="text-xs text-gray-600">{details}</p>
                    </div>

                    <div className="text-sm text-gray-700 border rounded-sm p-[10px] border-[#23232133]">
                        <div className="flex justify-between mb-1 border-b-1 border-[#23232133] p-[5px]">
                            <span>Sales</span>
                            <span className="flex items-center gap-1">
                                <FaArrowUp className='text-[#FFA52F]' /> {sales}
                            </span>
                        </div>

                        <div className="flex justify-between p-[5px] items-center">
                            <span>Remaining Products</span>
                            <div className="flex items-center">
                                {/* <RemainingProgress remaining={30} /> */}
                                <div className="w-[50px] h-[3px] bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                        className="bg-[#FFA52F] rounded-full h-full"
                                        style={{ width: `${percentage}%` }}
                                    />
                                </div>
                                <span className='pl-[5px]'>{remaining}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Itemprop;
