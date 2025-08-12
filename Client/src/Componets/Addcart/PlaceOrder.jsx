import React, { useContext, useState } from 'react';
import { LuBadgePercent } from "react-icons/lu";
import { GoGift } from "react-icons/go";
import { ProductContext } from '../Context';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = ({ category }) => {
    const { cartItem, products, BASE_URL, STORE_ID } = useContext(ProductContext);
    const navigate = useNavigate();

    const getProductId = (product) => product.id || product._id;
    const cartProducts = products.filter(product => cartItem[getProductId(product)] > 0);

    const calculateTotal = () => {
        return cartProducts.reduce((sum, product) => {
            const quantity = cartItem[getProductId(product)] || 0;
            const price = product.price || 0;
            return sum + price * quantity;
        }, 0).toFixed(2);
    };

    const [data, setdata] = useState({
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
    });

    const [method, setmethod] = useState("card");

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setdata(prev => ({ ...prev, [name]: value }));
    };

    const loadRazorpayScript = () => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const placeorder = async (e) => {
        e.preventDefault();
        const payload = {
            shipping_address: {
                street: data.street,
                city: data.city,
                state: data.state,
                zip_code: data.zipcode,
                country: data.country,
            },
            payment_method: method,
            amount: 100,
            currency: "INR"
        };
        console.log("payload", payload);
        console.log(STORE_ID);

        try {
            const token = localStorage.getItem("access_token");
            const response = await axios.post(`${BASE_URL}/api/storefront/store/${STORE_ID}/orders`, payload, {

                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            }

            );

            const result = response.data;
            console.log(result);

            if (result.success) {
                const res = await loadRazorpayScript();

                if (!res) {
                    alert("Razorpay failed to load. Are you online ?");
                    return;
                }
                console.log(result.data);

                const options = {
                    key: "rzp_test_2TD6bdPgMvp803",
                    amount: (calculateTotal() + 2) * 100,
                    currency: "INR",
                    name: "dhaneri",
                    description: "Hello",
                    order_id: result.data.order._id,
                    handler: function (response) {
                        alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
                        navigate("/myorder");
                    },
                    prefill: {
                        name: "aesvi",
                        email: "abc@gmail.com",
                        contact: "123457890",
                    },
                    theme: {
                        color: "#d4b952",
                    },
                };
                console.log("options", options);

                const paymentObject = new window.Razorpay(options);
                paymentObject.open();
            } else {
                alert("Order failed: " + (result.message || "Unknown error"));
            }
        } catch (err) {
            console.error("Order Error:", err);
            alert("Something went wrong while placing the order.");
        }
    };

    return (
        <div className="py-[15px]">
            <div className="max-w-screen-xxl mx-auto px-[15px]">
                <div className="inner-main">
                    <form onSubmit={placeorder} className="flex flex-wrap gap-8 justify-between m-[70px]">
                        <div className="w-[60%]">
                            <h3 className="text-[30px] text-[#555] font-semibold mb-4">Delivery Information</h3>
                            {/* <input name='firstname' onChange={onChangeHandler} value={data.firstname} className="w-full mb-[15px] p-[10px] border rounded-md" type="text" placeholder="First Name" />
                            <input name='lastname' onChange={onChangeHandler} value={data.lastname} className="w-full mb-[15px] p-[10px] border rounded-md" type="text" placeholder="Last Name" />
                            <input name='email' onChange={onChangeHandler} value={data.email} className="w-full mb-[15px] p-[10px] border rounded-md" type="email" placeholder="Email Address" />
                            <input name='phone' onChange={onChangeHandler} value={data.phone} className="w-full mb-[15px] p-[10px] border rounded-md" type="text" placeholder="Phone" /> */}
                            <input name='street' onChange={onChangeHandler} value={data.street} className="w-full mb-[15px] p-[10px] border rounded-md" type="text" placeholder="Street" />
                            <div className="flex gap-[10px]">
                                <input name='city' onChange={onChangeHandler} value={data.city} className="w-full mb-[15px] p-[10px] border rounded-md" type="text" placeholder="City" />
                                <input name='state' onChange={onChangeHandler} value={data.state} className="w-full mb-[15px] p-[10px] border rounded-md" type="text" placeholder="State" />
                            </div>
                            <div className="flex gap-[10px]">
                                <input name='zipcode' onChange={onChangeHandler} value={data.zipcode} className="w-full mb-[15px] p-[10px] border rounded-md" type="text" placeholder="Zip Code" />
                                <input name='country' onChange={onChangeHandler} value={data.country} className="w-full mb-[15px] p-[10px] border rounded-md" type="text" placeholder="Country" />
                            </div>
                        </div>

                        {/* right side */}
                        <div className="w-[35%]">
                            <div className="p-3">
                                <h3 className="text-[20px] text-[#555] font-semibold mb-4">Price Details</h3>
                                <div className="bg-[#f4f4f4] p-4 rounded">
                                    <div className="flex justify-between text-[13px] pb-2 border-b">
                                        <p className="flex items-center gap-2"><LuBadgePercent />Apply Coupon</p>
                                        <a href="#" className="text-[#d4b952] underline">View Offers</a>
                                    </div>
                                    <div className="flex justify-between text-[13px] pb-2 border-b">
                                        <p className="flex items-center gap-2"><LuBadgePercent />Affiliate Code</p>
                                        <a href="#" className="text-[#d4b952] underline">Apply</a>
                                    </div>
                                    <div className="flex justify-between text-[13px] pb-2 border-b">
                                        <p className="flex items-center gap-2"><GoGift />Gift Card</p>
                                        <a href="#" className="text-[#d4b952] underline">Redeem</a>
                                    </div>
                                    <div className="flex justify-between font-semibold pb-2 border-b">
                                        <p>Sub Total</p>
                                        <p>₹{calculateTotal()}</p>
                                    </div>
                                    <div className="flex justify-between font-semibold pb-2 border-b">
                                        <p>Total</p>
                                        <p>₹{(parseFloat(calculateTotal()) + 2).toFixed(2)}</p>

                                    </div>

                                    <div className="mt-12">
                                        <h1 className='pb-2'>Payment</h1>
                                        <div className="flex gap-3 w-full flex-row lg:flex-row text-[12px] pb-2">
                                            <div onClick={() => setmethod('card')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer rounded">
                                                <p className='min-w-3.5 h-3.5 border rounded-full hover:bg-green-500 hover:border-none'></p>
                                                <p>Card</p>
                                            </div>
                                            <div onClick={() => setmethod('paytm')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer rounded">
                                                <p className='min-w-3.5 h-3.5 border rounded-full hover:bg-green-500 hover:border-none'></p>
                                                <p>Paytm</p>
                                            </div>
                                            <div onClick={() => setmethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer rounded">
                                                <p className='min-w-3.5 h-3.5 border rounded-full hover:bg-green-500 hover:border-none'></p>
                                                <p>Cash on Delivery</p>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-[#d4b952] text-white py-2 rounded transition duration-300 hover:bg-[#c3a841]"
                                    >
                                        Proceed to Payment
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;