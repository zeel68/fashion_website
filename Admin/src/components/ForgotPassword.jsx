import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import store from '../store/store';

const ForgotPassword = () => {
    const { forgot } = store();
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) {
            alert('Please enter your email');
            return;
        }

        const success = await forgot(email);
        if (success) {
            navigate('/verifyemail', { state: { email } });
        }
        setEmail('');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-[60px] rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-[20px]">Forgot Password</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input type="email" placeholder="Enter your email" className="mb-[20px] w-full p-[10px] border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <button type="submit" className="w-full bg-black p-[5px] text-white py-2 rounded transition duration-200">
                        Send OTP
                    </button>
                </form>
            </div>
        </div>

    );
};

export default ForgotPassword;
