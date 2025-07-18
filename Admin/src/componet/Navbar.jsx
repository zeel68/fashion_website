import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosMenu } from "react-icons/io";
import store from '../store/store';

function Navbar({ toggleSidebar }) {
    const { user, logout } = store();
    const [username, setUsername] = useState('');
    // const [email, setemail] = useState('');

    useEffect(() => {
        if (user?.username) {
            setUsername(user.username);
            // setemail(user.email);
        } else {
            const storedName = localStorage.getItem('username');
            // const storedemail = localStorage.getItem('email');
            if (storedName) setUsername(storedName);
            // if (storedemail) setemail(storedemail);
        }
    }, [user]);

    // Notifications toggle
    const [showNotifications, setShowNotifications] = useState(false);
    const ref = useRef(null);
    const toggleNotifications = () => {
        setShowNotifications((prev) => {
            if (!prev) setadmin(false);
            return !prev;
        });
    };
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setShowNotifications(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // admin toggle
    const [admin, setadmin] = useState(false);
    const adminref = useRef(null);
    const admindropdown = () => {
        setadmin((prev) => {
            if (!prev) setShowNotifications(false);
            return !prev;
        });
    };
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (adminref.current && !adminref.current.contains(e.target)) {
                setadmin(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    //  logout
    var navigate = useNavigate();

    const handlelogout = async () => {
        await logout();
        navigate('/');
    };
    return (
        <nav className='max-w-screen-xxl navbar w-[100%] bg-white relative index-[10] text-black border border-[#00538A]'>

            <div className="inner flex justify-between items-center p-[15px]">
                <IoIosMenu onClick={toggleSidebar} className='lg:hidden' />


                <div className="left relative ">
                    <input className='sm:w-[400px] rounded-md border border-[#D7D7D7DA] shadow-custom bg-[#E0F0FB] p-[5px] text-sm ' type="text" placeholder='Search' />
                    <CiSearch className='absolute top-1/2 transform -translate-y-1/2 right-4' />
                </div>


                <div className="right flex justify-between">

                    <div className="relative inline-block text-left">
                        <div className="w-[50px]" onClick={toggleNotifications}>
                            <FaBell className="text-[#232323] m-[10px] cursor-pointer" />
                        </div>

                        {/* Notifications Pop-pop */}
                        {showNotifications && (
                            <div ref={ref} className="absolute right-15 top-15 mt-[5px] w-[300px] bg-white shadow-md rounded-lg z-10">
                                <div className=" flex justify-between items-center p-[8px]">
                                    <div className="font-semibold">Notifications</div>
                                    <IoMdCloseCircleOutline onClick={toggleNotifications} />
                                </div>
                                <div className="max-h-[200px] overflow-y-auto">
                                    {[1, 2, 3, 4].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-3 p-[5px] bg-[#FAFAFA] m-[5px] rounded-md">
                                            <div className="w-[40px] h-[40px] bg-gray-300 rounded" />
                                            <div className="flex-grow">
                                                <p className="font-[12px]">Lorem Ipsum</p>
                                                <p className="text-[10px]">₹140</p>
                                                <p className="text-xs text-gray-500">Nov 15, 2023</p>
                                            </div>
                                            <span className="text-xs bg-[#00538A] text-white px-[10px] py-[5px] rounded">Sold</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center p-[5px]">
                                    <button className="text-[10px]">✓ MARK ALL AS READ</button>
                                    <button className="bg-[#00538A] text-white text-[10px] px-[10px] py-[5px] rounded">VIEW ALL NOTIFICATION</button>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex " onClick={admindropdown}>
                        <div className="user">
                            <img className="w-full rounded-[50%] max-w-[35px]" src="../src/assets/img.jpg" alt="User" />
                        </div>
                        <div className="flex items-center">
                            <div className=" flex-wrap p-[5px] items-center justify-start mr-[5px] w-[85px] hidden sm:block">
                                <p className='text-black text-[14px]'>{username || 'User'}</p>
                                {/* <span className='text-inner'>{email || 'user@example.com'}</span> */}
                            </div>
                        </div>
                    </div>

                    {admin && (
                        <div ref={adminref} className="absolute right-15 top-20 mt-[5px] p-[10px] w-[200px] bg-white shadow-md rounded-md z-10 text-[#232321]">
                            <h3 className="font-bold text-black text-[20px] mb-[5px] p-[5px]">{username || 'Admin'}</h3>
                            <div className="flex items-center justify-between p-[5px] hover:bg-gray-100 hover:rounded cursor-pointer">
                                <span className="text-[14px] text-[#232321]">CHANGE PASSWORD</span>
                                <IoIosArrowForward className="text-gray-600 text-sm" />
                            </div>
                            <div onClick={handlelogout} className="flex items-center justify-between p-[5px] hover:bg-gray-100 hover:rounded cursor-pointer">
                                <span className="text-[14px] text-[#232321]">LOG OUT</span>
                                <FiLogOut className="text-gray-600 text-sm" />
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </nav >
    );
}

export default Navbar;