import React, { useContext, useState } from 'react';
import { LuBadgePercent } from "react-icons/lu";
import { GoGift } from "react-icons/go";
import { ProductContext } from '../Context';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const stripePromise = loadStripe("pk_test_51RirDPQt30uQV8ZUgMQqr4ksR9TYNjUfHSG3MzfVlwqHfLWNBRqnZKtmqCnBViJEmHykttB6LKK2j9Ea5gHFYzPC00AyiBrvck")

const PlaceOrder = ({ category }) => {
    const { cartItem, products, token } = useContext(ProductContext);

    const getProductId = (product) => product.id || product._id;

    const cartProducts = products.filter(product => cartItem[getProductId(product)] > 0);

    const calculateTotal = () => {
        return cartProducts.reduce((total, product) => {
            const id = getProductId(product);
            return total + product.price * cartItem[id];
        }, 0);
    };

    const [data, setdata] = useState({
        firstname: "",
        lastname: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: ""
    });

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setdata(prev => ({ ...prev, [name]: value }));
    };

    const placeorder = async (e) => {
        e.preventDefault();

        const orderItems = cartProducts.map(item => ({
            id: getProductId(item),
            name: item.name,
            price: item.price,
            quantity: cartItem[getProductId(item)]
        }));

        const orderData = {
            address: data,
            items: orderItems,
            amount: calculateTotal() + 2,
            userId: localStorage.getItem("userId"),
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email
        };

        try {
            const token = localStorage.getItem("auth-token");
            console.log("TOKEN SENDING:", token);
            const response = await axios.post("http://localhost:4040/api/order/place", orderData, {
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": token,
                },
            });

            const result = response.data;

            if (result.success) {
                const stripe = await stripePromise;
                await stripe.redirectToCheckout({ sessionId: result.session_id });
            } else {
                alert("Order failed: " + (result.message || "Unknown error"));
            }
        } catch (err) {
            console.error("Order Error:", err);
            alert("Something went wrong while placing the order.");
        }
    };

    // const navigate = useNavigate();
    // useEffect(() => {
    //     if (!token) {
    //         navigate('/cart')
    //     }
    //     else if (calculateTotal() === 0) {
    //         navigate('/cart')
    //     }
    // }, [token])

    return (
        <div className="py-[15px]">
            <div className="max-w-screen-xxl mx-auto px-[15px]">
                <div className="inner-main">
                    <form onSubmit={placeorder} className="flex flex-wrap gap-8 justify-between m-[70px]">
                        {/* Left Section - Delivery Info */}
                        <div className="w-[60%]">
                            <h3 className="text-[30px] text-[#555] font-semibold mb-4">Delivery Information</h3>
                            <div className="flex gap-[10px]">
                                <input name='firstname' onChange={onChangeHandler} value={data.firstname} className="w-full mb-[15px] p-[10px] border rounded-md" type="text" placeholder="First Name" />
                                <input name='lastname' onChange={onChangeHandler} value={data.lastname} className="w-full mb-[15px] p-[10px] border rounded-md" type="text" placeholder="Last Name" />
                            </div>
                            <input name='email' onChange={onChangeHandler} value={data.email} className="w-full mb-[15px] p-[10px] border rounded-md" type="email" placeholder="Email Address" />
                            <input name='street' onChange={onChangeHandler} value={data.street} className="w-full mb-[15px] p-[10px] border rounded-md" type="text" placeholder="Street" />
                            <div className="flex gap-[10px]">
                                <input name='city' onChange={onChangeHandler} value={data.city} className="w-full mb-[15px] p-[10px] border rounded-md" type="text" placeholder="City" />
                                <input name='state' onChange={onChangeHandler} value={data.state} className="w-full mb-[15px] p-[10px] border rounded-md" type="text" placeholder="State" />
                            </div>
                            <div className="flex gap-[10px]">
                                <input name='zipcode' onChange={onChangeHandler} value={data.zipcode} className="w-full mb-[15px] p-[10px] border rounded-md" type="text" placeholder="Zip Code" />
                                <input name='country' onChange={onChangeHandler} value={data.country} className="w-full mb-[15px] p-[10px] border rounded-md" type="text" placeholder="Country" />
                            </div>
                            <input name='phone' onChange={onChangeHandler} value={data.phone} className="w-full mb-[15px] p-[10px] border rounded-md" type="text" placeholder="Phone" />
                        </div>

                        {/* Right Section - Price Details */}
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
                                        <p>₹{calculateTotal() + 2}</p>
                                    </div>
                                    <button type='submit' className="w-full bg-[#d4b952] text-white py-2 rounded transition duration-300">
                                        Payment
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
