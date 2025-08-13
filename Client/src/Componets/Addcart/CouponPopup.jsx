import React, { useContext, useState } from 'react';
import { LuBadgePercent } from "react-icons/lu";
import { ProductContext } from '../Context';

const CouponPopup = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [couponCode, setCouponCode] = useState('');
    const [message, setMessage] = useState('');
    const { BASE_URL, STORE_ID } = useContext(ProductContext);
    const handlecoupon = async () => {
        try {
            
            const token = localStorage.getItem("access_token");
            const response = await fetch(`${BASE_URL}/api/storefront/store/${STORE_ID}/cart/coupon`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`

                },
                body: JSON.stringify({ coupon: couponCode })
            });

            const data = await response.json();
            console.log("Coupon apply response:", data);

            if (data.success) {
                setMessage("Coupon applied successfully!");
            } else {
                setMessage(data.message || "Failed to apply coupon.");
            }

        } catch (err) {
            setMessage("error");
        } finally {
            setShowPopup(false);
        }
    };

    return (
        <>
            <div className="flex justify-between items-center mb-2 text-[13px] font-normal pb-2 border-b border-[#d6d6d6]" onClick={() => setShowPopup(true)}>
                <p className="flex items-center gap-2 cursor-pointer">
                    <LuBadgePercent /> Apply Coupon
                </p>

                <a href="#" className="text-[#d4b952] underline">View Offers</a>
            </div>



            {
                showPopup && (
                    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
                        <div className="bg-white p-4 rounded-md w-[300px]">
                            <h2 className="text-lg font-bold mb-2">Enter Coupon Code</h2>
                            <input type="text" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} placeholder="Enter coupon code" className="border w-full p-2 mb-3 rounded" />
                            <div className="flex justify-end gap-2">
                                <button onClick={() => setShowPopup(false)} className="px-3 py-1 bg-gray-300 rounded" > Cancel </button>
                                <button onClick={handlecoupon} className="px-3 py-1 bg-[#d4b952] text-white rounded"> Apply </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </>



    );
};

export default CouponPopup;
