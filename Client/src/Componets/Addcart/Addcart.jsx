import React, { useContext, useState } from 'react';
import { LuBadgePercent } from "react-icons/lu";
import { GoGift } from "react-icons/go";
import Carthader from './Carthader';
import { ProductContext } from '../Context';
import { FaMinus, FaPlus } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { IoCloseSharp } from 'react-icons/io5';
import CouponPopup from './CouponPopup';


const Addcart = () => {
    const { cartItem, updatequa, clearcart, remove, addTocart, products } = useContext(ProductContext);

    const navigate = useNavigate();

    const cartProducts = products.filter(product => cartItem[product._id] > 0);

    const calculateTotal = () => {
        return cartProducts.reduce((sum, product) => {
            const qty = cartItem[product._id] || 0;
            const itemTotal = product.price * qty;
            return sum + itemTotal;
        }, 0).toFixed(2);
    };

    if (cartProducts.length === 0) {
        return (
            <div className="main">
                <Carthader />
                <div className="max-w-screen-xxl mx-auto px-20">
                    <h2 className="text-[20px] text-[#555] font-semibold mb-4">Your cart is empty.</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="main">
            <Carthader />
            <div className="max-w-screen-xxl mx-auto px-20">
                <div className="flex justify-center text-[#d4b952] border border-[#d4b952] p-2 mb-4 text-[12px] font-semibold rounded">
                    Indya will never contact you to offer products, cash or any free gifts etc. Kindly do not respond, make payments or share any personal or bank information via call, mail or links.
                </div>

                <div className="flex">
                    {/* Cart List */}
                    <div className="w-[65%] p-3">
                        <h2 className="text-[20px] text-[#555] font-semibold mb-4">My Shopping Bag ({cartProducts.length})</h2>

                        {cartProducts.map(product => (
                            <div key={product._id} className="flex border border-[#ececec] mb-4">
                                <div className="p-4">
                                    <img src={product.image} alt={product.name} className="w-[110px] h-[120px] block" />
                                </div>

                                <div className="w-full p-4">
                                    <div className="">
                                        <div className="flex flex-wrap justify-between">
                                            <h3 className="text-[15px] font-normal hover:underline">{product.name}</h3>
                                            <div className="pr-3">
                                                <IoCloseSharp onClick={() => remove(product._id)} className="w-5 h-5 text-black cursor-pointer hover:opacity-80 " />

                                            </div>
                                        </div>

                                        <div className="text-right flex">
                                            <p className="text-[15px] text-[#555] pr-3">Price: ₹{product.price}</p>
                                            {product.oldprice && (
                                                <p className="line-through text-[15px] text-[#555]">₹{product.oldprice}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex text-sm text-gray-600 mb-1">
                                        <span className="pr-8">Size: Unstitched</span>
                                        <span className="pr-8">Qty: {cartItem[product._id]}</span>
                                        <span>Color: {product.color || 'red'}</span>
                                    </div>
                                    <div className="text-sm text-gray-600 mb-3">SKU CODE : {product.sku || 'XSR30702U'}</div>

                                    <div className="flex gap-3">
                                        <p className=' text-sm text-gray-600'>Qty :</p>


                                        <Link onClick={() => { console.log("add to cart:", product); addTocart(product._id); }} className="p-1 bg-gray-300 text-black">
                                            <FaPlus size={10} />
                                        </Link>
                                        <Link onClick={() => { console.log("update to cart:", product); updatequa(product._id); }} className="p-1 bg-gray-300 text-black">
                                            <FaMinus size={10} />
                                        </Link>

                                    </div>
                                    <div className="flex flex-wrap justify-between pt-[10px]">
                                        <a href="/" className="text-black text-[13px] underline cursor-pointer">Move to Wishlist</a>

                                    </div>

                                </div>
                            </div>
                        ))}

                        <div className="flex justify-between items-center mb-6 border border-[#ececec] mt-6 p-4">
                            <a href="#" className="text-[#d4b952] text-[15px] font-light cursor-pointer">← Continue Shopping</a>
                            <Link onClick={clearcart} className="text-[#6e6e6e] text-[13px] underline cursor-pointer">
                                Clear cart
                            </Link>
                        </div>
                    </div>

                    {/* Price Details */}
                    <div className="w-[35%] p-3">
                        <h3 className="text-[20px] text-[#555] font-semibold mb-4">Price Details</h3>
                        <div className="bg-[#f4f4f4] p-4">

                            <CouponPopup />
                           
                            <div className="flex justify-between items-center mb-2 text-[13px] font-normal pb-2 border-b border-[#d6d6d6]">
                                <p className="flex items-center gap-2"><LuBadgePercent />Affiliate Code</p>

                                <a href="#" className="text-[#d4b952] underline">Apply</a>
                            </div>

                            <div className="flex justify-between items-center mb-4 text-[13px] font-normal pb-2 border-b border-[#d6d6d6]">
                                <p className="flex items-center gap-2"><GoGift />Gift Card</p>
                                <a href="#" className="text-[#d4b952] underline">Redeem</a>
                            </div>

                            <div className="flex justify-between mb-2 font-semibold pb-2 border-b border-[#d6d6d6]">
                                <p>Sub Total</p>
                                <p>₹{calculateTotal()}</p>
                            </div>

                            <div className="flex justify-between mb-4 font-semibold pb-2 border-b border-[#d6d6d6]">
                                <p>Total</p>
                                <p>₹{calculateTotal()}</p>
                            </div>

                            <button onClick={() => navigate('/placeorder')} className="w-full bg-[#d4b952] text-[#fff] font-light text-[13px] py-2 rounded transition duration-300">
                                Place Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Addcart;
