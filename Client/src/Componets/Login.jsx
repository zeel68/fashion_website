
import React, { useState } from 'react';
import { IoCloseCircleOutline } from "react-icons/io5";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import store from '../LoginApi/store/store';
import ForgotPassword from './Login/ForgotPassword';
import VerifyEmail from './Login/VerifyEmail';

const Login = ({ onClose }) => {
    const { login, signup, error } = store();
    const [state, setState] = useState("Login");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        phone_number: "",
        store_id: '6874da6ef34b88733c0b452c'
    });

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        if (state === "Login") {
            const res = await login({ email: formData.email, password: formData.password });
            if (res.success) {
                window.location.replace("/");
            } else {
                alert(res.message);
            }
        } else {
            const res = await signup(formData);
            if (res.success) {
                alert("Signup successful! Please login now.");
                setState("Login");
                setFormData({
                    name: "",
                    email: "",
                    password: "",
                    phone_number: "",
                    store_id: '6874da6ef34b88733c0b452c'
                });
            } else {
                alert(res.message);
            }
        }
    };

    const [showForgot, setShowForgot] = useState(false);
    const [showVerify, setShowVerify] = useState(false);
    const [verifyEmail, setVerifyEmail] = useState('');

    return (
        <>
            <div className="fixed inset-0 bg-[rgba(0,0,0,0.8)] z-50 flex justify-center items-center">
                <div className="relative w-[40%] sm:w-[400px] bg-white p-10 shadow-lg rounded-md z-70">

                    <IoCloseCircleOutline
                        className="absolute top-3 right-3 cursor-pointer text-gray-600"
                        size={25}
                        onClick={onClose}
                    />

                    <h3 className='text-[24px] uppercase font-semibold'>{state}</h3>
                    <p className='text-[14px] font-semibold pt-2'>for a quicker checkout</p>

                    {state.toLowerCase() === "signup" && (
                        <>
                            <input name='name' value={formData.name} onChange={changeHandler} className='mt-2 text-[#6d6d6d] border border-[#ececec] w-full mb-3 p-2 outline-none rounded-md' type="text" placeholder="Enter name" />
                            <input name='phone_number' value={formData.phone_number} onChange={changeHandler} className='mt-2 text-[#6d6d6d] border border-[#ececec] w-full mb-3 p-2 outline-none rounded-md' type="text" placeholder="Enter Phone number" />
                        </>
                    )}

                    <input name='email' value={formData.email} onChange={changeHandler} className='mt-1 text-[#6d6d6d] border border-[#ececec] w-full mb-3 p-2 outline-none rounded-md' type="text" placeholder="Enter Mobile/Email" />
                    <input name='password' value={formData.password} onChange={changeHandler} className='mt-1 text-[#6d6d6d] border border-[#ececec] w-full mb-3 p-2 outline-none rounded-md' type="password" placeholder="Enter Password" />

                    <button onClick={handleSubmit} className='mt-6 bg-[#d4b952] text-white text-center text-sm py-2 w-full rounded-md'>Login</button>

                    {error && <p className="text-red-500 mt-2">{error}</p>}

                    {state.toLowerCase() === "signup" ? (
                        <p className='mt-4'>Already have an account?{" "}
                            <span onClick={() => setState("Login")} className='text-[#d4b952] cursor-pointer'>
                                Login here
                            </span>
                        </p>
                    ) : (
                        <p className='mt-4'>Create an account?{" "}
                            <span onClick={() => setState("Signup")} className='text-[#d4b952] cursor-pointer'>
                                Click here
                            </span>
                        </p>
                    )}

                    <div className="relative text-center my-3">
                        <hr className="absolute top-1/2 left-0 w-full border-t border-gray-300 z-0" />
                        <span className="relative inline-block bg-white px-4 text-gray-500 z-10">Or continue with</span>
                    </div>

                    <button
                        onClick={() => setShowForgot(true)}
                        className="mt-2 text-sm text-[#70706E] hover:text-[#003B5A]"
                    >
                        Forgot your password?
                    </button>

                    <div className="flex justify-center ">
                        <GoogleLogin
                            onSuccess={(credentialResponse) => {
                                const decoded = jwtDecode(credentialResponse.credential);
                                console.log("Google User:", decoded);

                                localStorage.setItem('user', JSON.stringify(decoded));
                                localStorage.setItem('name', decoded.name);
                                localStorage.setItem('email', decoded.email);

                                onClose();
                                window.location.replace("/");
                            }}
                            onError={() => {
                                console.log('Google Login Failed');
                            }}
                        />
                    </div>
                </div>
            </div>

            {showForgot && (
                <div className="fixed inset-0 bg-[rgba(0,0,0,0.8)] z-50 flex justify-center items-center">
                    <ForgotPassword
                        onClose={() => setShowForgot(false)}
                        onOtpSent={(email) => {
                            setShowForgot(false);
                            setVerifyEmail(email);
                            setShowVerify(true);
                        }}
                    />
                </div>
            )}

            {showVerify && (
                <div className="fixed inset-0 bg-[rgba(0,0,0,0.8)] z-50 flex justify-center items-center">
                    <VerifyEmail
                        email={verifyEmail}
                        onClose={() => setShowVerify(false)}
                    />
                </div>
            )}
        </>
    );
};

export default Login;
