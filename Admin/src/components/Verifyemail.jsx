import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const VerifyEmail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const email = location.state?.email || '';

    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting:', { email, otp, newPassword });
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
            navigate('/');
        } catch (err) {
            console.log(err);
            alert(err.response?.data?.error || 'Failed to reset password');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-[100px] rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-[20px] text-center text-gray-800">Verify OTP & Reset Password</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input type="text" placeholder="Enter OTP" className="w-full px-[20px] py-[10px] border mb-[20px] border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" value={otp} onChange={(e) => setOtp(e.target.value)} require />
                    </div>
                    <div className="mb-6">
                        <input type="password" placeholder="Enter New Password" className="w-full px-[20px] py-[10px] border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 mb-[20px]" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-black text-white p-[5px] py-2 rounded  transition duration-200"
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </div>

    );
};

export default VerifyEmail;

