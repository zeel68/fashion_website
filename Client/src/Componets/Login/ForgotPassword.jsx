
import React, { useState } from 'react';
import { IoCloseCircleOutline } from "react-icons/io5";
import store from '../../LoginApi/store/store';

const ForgotPassword = ({ onClose, onOtpSent }) => {
    const { forgot } = store();
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) {
            alert('Please enter your email');
            return;
        }

        const success = await forgot(email);
        if (success) {
            alert('OTP sent successfully. Check your email.');
            setEmail('');
            onOtpSent(email);
        }
    };

    return (
        <div className="w-full max-w-md bg-white p-[40px] rounded-lg shadow-md relative">
            <IoCloseCircleOutline
                className="absolute top-3 right-3 cursor-pointer text-gray-600"
                size={25}
                onClick={onClose}
            />

            <h2 className="text-2xl font-bold text-center text-gray-800 mb-[20px]">Forgot Password</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input type="email" placeholder="Enter your email" className="w-full p-[10px] border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <button type="submit" className="w-full bg-[#d4b952] text-white py-2 rounded transition duration-200">
                    Send OTP
                </button>
            </form>
        </div >
    );
};

export default ForgotPassword;
