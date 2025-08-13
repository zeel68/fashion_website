import React, { useContext } from 'react';
import { ProductContext } from '../Context';
import { Link, useNavigate } from 'react-router-dom';
import Carthader from './Carthader';
import { IoCloseSharp } from 'react-icons/io5';

const WishList = () => {
    const { wishItem, clearwishlist, removeFromWishlist, products } = useContext(ProductContext);
    const navigate = useNavigate();
    console.log("wishItem", wishItem);

    const wishlistProducts = Object.entries(wishItem)
        .filter(([id, qty]) => qty > 0)
        .map(([id, qty]) => {
            const product = products.find(p => p._id === id);
            return product ? {
                _id: id,
                quantity: qty,
                product_id: product
            } : null;
        })
        .filter(Boolean);

    console.log("wishlistProducts", wishlistProducts);

    if (!products.length) {
        return (
            <div className="main">
                <Carthader />
                <div className="p-10">Loading...</div>
            </div>
        );
    }

    if (wishlistProducts.length === 0) {
        return (
            <div className="main">
                <Carthader />
                <div className="max-w-screen-xxl mx-auto px-20">
                    <h2 className="text-[20px] text-[#555] font-semibold mb-4">
                        Your wishlist is empty.
                    </h2>
                </div>
            </div>
        );
    }

    return (
        <div className="main">
            <Carthader />
            <div className="max-w-screen-xxl mx-auto px-20">
                <h2 className="text-[20px] text-[#555] font-semibold mb-4">
                    My Wishlist ({wishlistProducts.length})
                </h2>

                {wishlistProducts.map(product => (
                    <div key={product._id} className="flex border border-[#ececec] mb-4">
                        <div className="p-4">
                            <img
                                src={product.product_id?.images?.[0]}
                                alt={product.name}
                                className="w-[110px] h-[120px] object-cover block"
                            />
                        </div>
                        <div className="w-full p-4">
                            <div className="flex justify-between">
                                <h3 className="text-[15px] font-normal hover:underline">
                                   {product.product_id?.name}
                                </h3>
                                <IoCloseSharp
                                    onClick={() => removeFromWishlist(product._id)}
                                    className="w-5 h-5 text-black cursor-pointer hover:opacity-80"
                                />
                            </div>

                            <div className="text-right flex gap-3">
                                <p className="text-[15px] text-[#555]">Price: ₹{product.product_id?.price}</p>
                                {product.oldprice && (
                                    <p className="line-through text-[15px] text-[#555]">
                                        ₹{product.oldprice}
                                    </p>
                                )}
                            </div>

                            <div className="flex text-sm text-gray-600 mb-1">
                                <span className="pr-8">Size: Unstitched</span>
                                <span>Color: {product.product_id?.color || 'red'}</span>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="flex justify-between">
                    <button
                        onClick={() => navigate('/')}
                        className="mt-4 bg-[#d4b952] text-white py-2 px-4 rounded"
                    >
                        Continue Shopping
                    </button>
                    <button
                        onClick={clearwishlist}
                        className="mt-4 bg-[#d4b952] text-white py-2 px-4 rounded"
                    >
                        Clear Wishlist
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WishList;
