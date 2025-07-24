import React, { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { FaTruckFast } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Sareeprop = ({ title, options = [] }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="w-[170px] relative text-[#919191] text-[12px] mx-2 mb-3">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex justify-between items-center w-full px-2 py-1 border border-[#dcdcdc] bg-white"
                >
                    <span className="font-semibold">{title}</span>
                    <IoMdArrowDropdown />
                </button>

                <div
                    className={`absolute top-full left-0 w-full bg-white border border-[#dcdcdc] z-10 overflow-hidden transition-all duration-300 ease-in-out 
                ${isOpen ? "max-h-[400px] opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"} origin-top`}
                >
                    <ul className="py-1">
                        {options.map((opt, index) => (
                            <li key={index} className="flex items-center px-3 py-2 hover:bg-gray-100">
                                <input type="checkbox" className="mr-2" />
                                <span>{opt.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>


        </>
    )
}

export default Sareeprop;

export const Product = ({ images, name, price, oldprice, delivery, id }) => {
    return (
        <>
            {/* product section */}

            <div className="w-[32%] my-[10px]">
                <div className="border border-[#e5e5e5] w-full">
                    <Link to={`/saree/${id}`} onClick={() => window.scrollTo(0, 0)}>

                        <div className="relative w-full overflow-hidden group">
                            {/* Img 1  */}

                            <div className="absolute top-2 right-2 h-[40px] w-[40px] bg-black text-white text-[11px] font-semibold px-2.5 py-1 rounded-full z-10">
                                60% OFF
                            </div>

                            <img
                                className="w-full transition-opacity duration-[400ms] ease-in-out group-hover:opacity-0"
                                src={images}
                            // alt="saree"
                            />
                            {/* img 2 Hover */}
                            <img
                                className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-[400ms] ease-in-out opacity-0 group-hover:opacity-100"
                                src={images}
                                alt="saree-hover"
                            />
                            <div className="absolute bottom-0 left-0 text-center bg-[rgba(226,226,226)] p-[5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className='text-[12px] font-semibold'>
                                    Sizes XS, S, M, L, XL, 2XL, 3XL, 4XL, 5XL, 6XL, 7XL, 8XL, Unstitched
                                </p>
                            </div>

                        </div>

                        <div className="text p-[10px]">

                            <h3 className='text-[14px] font-medium py-[5px]'>{name}</h3>

                            <div className="flex justify-between py-[5px]">
                                <div className="text-[15px] font-semibold">
                                    <span className='pr-[5px]'>₹ {price}</span>
                                    <span className='line-through text-[#999]'>₹ {oldprice}</span>
                                </div>
                                <CiHeart className='text-[20px]' />
                            </div>

                            <div className="flex py-[5px]">
                                <FaTruckFast className='text-[25px] pl-[5px]' />
                                <span>{delivery}</span>
                            </div>

                        </div>
                    </Link >
                </div>
            </div >

        </>
    )
}


