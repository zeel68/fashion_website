import React, { useState } from 'react';
import axios from 'axios';
import { IoCloseCircleOutline } from "react-icons/io5";

const VerifyEmail = ({ email, onClose }) => {
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!otp || !newPassword) {
            alert('Please enter OTP and new password');
            return;
        }

        try {
            const res = await axios.post('http://65.1.3.198:5050/api/auth/reset-password', {
                email,
                otp,
                newPassword,
            });
            alert(res.data.message);
            setOtp('');
            setNewPassword('');
            onClose();
        } catch (err) {
            console.log(err);
            alert(err.response?.data?.error || 'Failed to reset password');
        }
    };

    return (
        <div className="w-full max-w-md bg-white p-[40px] rounded-lg shadow-md relative">
            <IoCloseCircleOutline
                className="absolute top-3 right-3 cursor-pointer text-gray-600"
                size={25}
                onClick={onClose}
            />
            <h2 className="text-2xl font-bold mb-[20px] text-center text-gray-800">Verify OTP & Reset Password</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input type="text" placeholder="Enter OTP" className="w-full px-[20px] py-[10px] border mb-[20px] border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" value={otp} onChange={(e) => setOtp(e.target.value)} required />
                </div>
                <div className="mb-6">
                    <input type="password" placeholder="Enter New Password" className="w-full px-[20px] py-[10px] border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 mb-[20px]" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
                </div>
                <button
                    type="submit"
                    className="w-full bg-[#d4b952] text-white py-2 rounded transition duration-200"
                >
                    Reset Password
                </button>
            </form>
        </div>
    );
};

export default VerifyEmail;

