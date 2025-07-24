import React, { useContext } from 'react';
import { ProductContext } from '../Context';
import { Link, useNavigate } from 'react-router-dom';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { FaMinus, FaPlus } from "react-icons/fa6";
import Carthader from './Carthader';

const WishList = () => {
    const { wishItem, addwishlist, clearwishlist, removeFromWishlist, products } = useContext(ProductContext);
    const navigate = useNavigate();
    console.log("Wish Items:", wishItem);

    // const wishlistProducts = wishItem; 
    // const wishlistProducts = products.filter(product => wishItem[product._id] > 0);
    console.log("Wish Items:", wishItem);

    const wishlistProducts = wishItem || []; // defensive fallback

    if (wishlistProducts.length === 0) {
        return (
            <div className="main">
                <Carthader />
                <div className="max-w-screen-xxl mx-auto px-20">
                    <h2 className="text-[20px] text-[#555] font-semibold mb-4">Your wishlist is empty.</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="main">
            <Carthader />
            <div className="max-w-screen-xxl mx-auto px-20">
                <h2 className="text-[20px] text-[#555] font-semibold mb-4">My Wishlist ({wishlistProducts.length})</h2>
                {wishlistProducts.map(product => (
                    <div key={product._id} className="flex border border-[#ececec] mb-4">
                        <div className="p-4">
                            <img src={product.image} alt={product.name} className="w-[110px] h-[120px] block" />
                        </div>
                        <div className="w-full p-4">
                            <h3 className="text-[15px] font-normal hover:underline">{product.name}</h3>
                            <div className="text-right flex">
                                <p className="text-[15px] text-[#555] pr-3">Price: ₹{product.price}</p>
                                {product.oldprice && (
                                    <p className="line-through text-[15px] text-[#555]">₹{product.oldprice}</p>
                                )}
                            </div>

                            <div className="flex text-sm text-gray-600 mb-1">
                                <span className="pr-8">Size: Unstitched</span>
                                <span className="pr-8">Qty: {wishItem[product._id]}</span>
                                <span>Color: {product.color || 'red'}</span>
                            </div>

                            <div className="flex gap-3 mt-2">
                                <p className='text-sm text-gray-600'>Qty :</p>
                                <Link onClick={() => removeFromWishlist(product._id)} className="p-1 bg-gray-300 text-black">
                                    <FaMinus size={10} />
                                </Link>
                                <Link onClick={() => addwishlist(product._id)} className="p-1 bg-gray-300 text-black">
                                    <FaPlus size={10} />
                                </Link>
                            </div>

                            <div className="flex flex-wrap justify-between pt-[10px]">
                                <a href="/" className="text-black text-[13px] underline cursor-pointer">Move to Cart</a>
                                <div className="pr-3">
                                    <RiDeleteBin5Fill onClick={() => clearwishlist(product._id)} className="w-5 h-5 text-red-700 cursor-pointer hover:opacity-80 " />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                <button onClick={() => navigate('/')} className="mt-4 bg-[#d4b952] text-white py-2 px-4 rounded">
                    Continue Shopping
                </button>
            </div>
        </div>
    );
};

export default WishList;
