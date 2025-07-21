import React, { useState } from 'react';
import { IoCloseCircleOutline } from "react-icons/io5";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import Store from '../LoginApi/store/store';

const Login = ({ onClose }) => {
    // const { setUser, setToken } = Store();

    const [state, setstate] = useState("Login");
    const [formData, setFormdata] = useState({
        name: "",
        email: "",
        password: "",
        phone_number: "",
        store_id: '6874da6ef34b88733c0b452c'
    });

    const changeHandaler = (e) => {
        setFormdata({ ...formData, [e.target.name]: e.target.value });
    };

    const login = async () => {
        console.log("login ", formData);
        try {
            const response = await axios.post('http://65.1.3.198:5050/api/auth/login', formData,
                {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (response.data.success) {
                localStorage.setItem('auth-token', response.data.token);

                // setToken(response.data.token);
                // setUser(response.data.user);

                window.location.replace("/");
            } else {
                alert(response.data.errors || "Login failed");
            }
        } catch (error) {
            console.error("Login error:", error.response?.data || error.message);
            alert(error.response?.data?.message || "Login failed. Check your credentials.");
        }
    };


    const signup = async () => {
        console.log("signup ", formData);
        try {
            const response = await axios.post('http://65.1.3.198:5050/api/auth/register', formData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                }
            );

            console.log("Signup response:", response.data);

            if (response.data.success) {
                alert("Signup successful! Please login now.");
                setstate("Login");
                setFormdata({
                    name: "",
                    email: "",
                    password: "",
                    phone_number: "",
                    store_id: '6874da6ef34b88733c0b452c'
                });
            } else {
                alert(response.data.errors || response.data.message || "Signup failed");
            }

        } catch (error) {
            console.error("Signup error:", error.response?.data || error.message);
            alert(error.response?.data?.message || error.message || "Signup failed");
        }
    };


    return (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.8)] z-50 flex justify-center items-center">
            <div className="relative w-[40%] sm:w-[400px] bg-white p-10 shadow-lg rounded-md z-70">

                {/* Close Icon */}
                <IoCloseCircleOutline
                    className="absolute top-3 right-3 cursor-pointer text-gray-600"
                    size={25}
                    onClick={onClose}
                />

                <h3 className='text-[24px] uppercase font-semibold'>{state}</h3>
                <p className='text-[14px] font-semibold pt-2'>for a quicker checkout</p>

                {state.toLowerCase() === "signup" && (
                    <div className="div">
                        <input
                            name='name'
                            value={formData.name}
                            onChange={changeHandaler}
                            className='mt-2 text-[#6d6d6d] border border-[#ececec] w-full mb-3 p-2 outline-none rounded-md'
                            type="text"
                            placeholder="Enter name"
                        />
                        <input
                            name='phone_number'
                            value={formData.phone_number}
                            onChange={changeHandaler}
                            className='mt-2 text-[#6d6d6d] border border-[#ececec] w-full mb-3 p-2 outline-none rounded-md'
                            type="text"
                            placeholder="Enter Phone number"
                        />
                    </div>
                )}

                <input
                    name='email'
                    value={formData.email}
                    onChange={changeHandaler}
                    className='mt-1 text-[#6d6d6d] border border-[#ececec] w-full mb-3 p-2 outline-none rounded-md'
                    type="text"
                    placeholder="Enter Mobile/Email"
                />
                <input
                    name='password'
                    value={formData.password}
                    onChange={changeHandaler}
                    className='mt-1 text-[#6d6d6d] border border-[#ececec] w-full mb-3 p-2 outline-none rounded-md'
                    type="password"
                    placeholder="Enter Password"
                />

                <button
                    onClick={() => { state === "Login" ? login() : signup() }}
                    className='mt-6 bg-[#d4b952] text-white text-center text-sm py-2 w-full rounded-md'>
                    Continue
                </button>

                {state.toLowerCase() === "signup" ? (
                    <p className='mt-4'>Already have an account?{" "}
                        <span onClick={() => setstate("Login")} className='text-[#d4b952] cursor-pointer'>
                            Login here
                        </span>
                    </p>
                ) : (
                    <p className='mt-4'>Create an account?{" "}
                        <span onClick={() => setstate("Signup")} className='text-[#d4b952] cursor-pointer'>
                            Click here
                        </span>
                    </p>
                )}

                <div className="relative text-center my-3">
                    <hr className="absolute top-1/2 left-0 w-full border-t border-gray-300 z-0" />
                    <span className="relative inline-block bg-white px-4 text-gray-500 z-10">Or continue with</span>
                </div>

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
    );
};

export default Login;
