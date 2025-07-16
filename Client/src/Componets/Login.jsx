import React, { useState } from 'react';
import { IoCloseCircleOutline } from "react-icons/io5";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

const Login = ({ onClose }) => {

    const [state, setstate] = useState("Login");
    const [formData, setFormdata] = useState({
        username: "",
        email: "",
        password: ""
    });

    const changeHandaler = (e) => {
        setFormdata({ ...formData, [e.target.name]: e.target.value });
    };

    const login = async () => {
        console.log("login ", formData);
        let responseData;
        await fetch('http://localhost:4040/weblogin', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }).then((response) => response.json()).then((data) => responseData = data);

        if (responseData.success) {
            localStorage.setItem('auth-token', responseData.token);
            window.location.replace("/");
        } else {
            alert(responseData.errors);
        }
    };

    const signup = async () => {
        console.log("signup ", formData);
        let responseData;
        await fetch('http://localhost:4040/signup', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }).then((response) => response.json()).then((data) => responseData = data);

        if (responseData.success) {
            alert("Signup successful! Please login now.");
            setstate("Login"); // Switch to login screen
            setFormdata({
                username: "",
                email: "",
                password: ""
            });
        } else {
            alert(responseData.errors);
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
                    <input
                        name='username'
                        value={formData.username}
                        onChange={changeHandaler}
                        className='mt-2 text-[#6d6d6d] border border-[#ececec] w-full mb-3 p-2 outline-none rounded-md'
                        type="text"
                        placeholder="Enter name"
                    />
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
                            localStorage.setItem('username', decoded.name);
                            localStorage.setItem('email', decoded.email);

                            onClose(); // Close modal
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
