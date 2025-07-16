import React, { useContext, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import {
  FaChevronDown, FaChevronUp, FaEye, FaFacebookF, FaIndianRupeeSign,
  FaInstagram, FaPinterest, FaTruckFast, FaWhatsapp
} from "react-icons/fa6";
import { MdDeliveryDining, MdOutlineSecurity } from "react-icons/md";
import SareesDetails from '../Sarees/Sareedetails';
import { ProductContext } from '../Context';

const ProductTopRight = () => {
  const { addTocart } = useContext(ProductContext);
  const { products } = useContext(ProductContext);

  const { id } = useParams();
  const product = SareesDetails.find(item => item.id === parseInt(id));

  if (!product) {
    return <div className="text-red-600 font-bold">Product not found</div>;
  }

  return (
    <div className="w-[33%] pt-[2px]">

      <div className="block">
        <span className='text-[20px] font-bold'>{product.name}</span>
      </div>

      <h4 className="flex items-center mt-[10px]">
        <span className="flex items-center text-[20px] mr-[5px] font-bold">
          <FaIndianRupeeSign className="mr-[2px]" />
          {product.price}
        </span>
        <span className="flex items-center text-[20px] text-[#999] line-through mr-[5px]">
          <FaIndianRupeeSign className="mr-[2px]" />
          {product.oldprice}
        </span>
        <span className="text-[14px] text-[#ed1c24]">(60% off)</span>
      </h4>

      <span className='text-[14px] text-[#666] mt-[10px]'>MRP (Inclusive of all taxes)</span>
      <p className='text-[12px] text-[#999] mt-[10px] font-bold'>SKU: <span>{product.sku || 'XSR30702U'}</span></p>

      {/* Delivery Info */}
      <div className="flex flex-wrap pt-[5px] pr-[10px] pb-0 align-middle">
        <div className="flex flex-wrap border-r border-r-[#bcbcbc] pr-[5px]">
          <FaTruckFast className='w-[16px]' />
          <h6 className='pl-[4px] text-[13px] font-bold uppercase text-[#353535]'>Express</h6>
        </div>
        <small className='pl-[5px] text-[12px] font-bold'>10 Day Delivery | Returnable</small>
      </div>

      {/* Blouse Option */}
      <div className="flex items-center flex-wrap pt-[15px] pr-[10px] pb-0 pl-0">
        <label className="radio-label pl-[5px] text-[14px] relative cursor-pointer font-extrabold flex items-center">
          Saree With Unstitched Blouse -
          <span className="flex items-center ml-[4px]">
            <FaIndianRupeeSign className="mr-[2px]" />0
          </span>
        </label>
      </div>

      {/* Add to Cart */}
      <div className="flex mt-[25px] w-full">
        <Link
          onClick={() => addTocart(product.id)}
          className='text-white bg-black text-center text-[12px] pt-[18px] pb-[18px] w-[55%] font-bold tracking-[1px] hover:bg-red-800 transition duration-300 ease-in-out'
        >
          ADD TO BAG
        </Link>
        <Link
          className='text-center text-[12px] pt-[17px] pb-[17px] pl-[10px] border border-[#dcdcdc] ml-[3%] box-border bg-white text-black pr-[10px] w-[42%] font-bold tracking-[1px] hover:bg-red-800 hover:text-white transition duration-300 ease-in-out'
        >
          ADD TO WISHLIST
        </Link>
      </div>

      {/* Eyeing Text */}
      <div className="mt-[13px] flex flex-wrap align-middle">
        <FaEye />
        <span className='text-[13px] pl-[1rem] text-[#555]'>219 people are eyeing this piece. Act fast!</span>
      </div>

      {/* Pincode */}
      <div className="mt-[30px]">
        <h5 className='text-[15px] font-bold'>Check Delivery Time</h5>
        <div className="relative mt-[15px] border border-[#dcdcdc]">
          <input type="text" className='outline-none p-[15px]  w-full box-border text-[15px]' placeholder='Enter Pin Code' />
          <span className='absolute top-[12px] right-[15px] cursor-pointer text-[#d4b952] font-bold uppercase text-[14px] border-l border-l-[#dcdcdc] pt-[5px] pr-0 pb-[5px] pl-[10px]'>Check</span>
        </div>
      </div>

      {/* Payment Info */}
      <div className="flex justify-between pb-[20px] pt-[20px] flex-wrap">
        <li className="list-none w-[48%] bg-white border border-[#dcdcdc] p-[10px] text-[13px] text-center text-black flex items-center justify-center">
          <MdDeliveryDining className="mr-[5px]" size={16} />
          COD Available
        </li>
        <li className="list-none w-[48%] bg-white border border-[#dcdcdc] p-[10px] text-[13px] text-center text-black flex items-center justify-center">
          <MdOutlineSecurity className="mr-[5px]" size={16} />
          Secure Payment
        </li>
      </div>



      {/* Social Icons */}
      <div className="mt-[30px] flex flex-wrap justify-between w-1/4">
        <Link to={'https://www.whatsapp.com/'}><FaWhatsapp className='text-green-800 cursor-pointer' size={20} /></Link>
        <Link to={'https://www.instagram.com/'}><FaInstagram className='text-pink-800 cursor-pointer' size={20} /></Link>
        <Link to={'https://www.facebook.com/'}><FaFacebookF className='text-blue-800 cursor-pointer' size={20} /></Link>
        <Link to={'https://www.pinterest.com/'}><FaPinterest className='text-pink-800 cursor-pointer' size={20} /></Link>
      </div>
    </div>
  );
};

export default ProductTopRight;
