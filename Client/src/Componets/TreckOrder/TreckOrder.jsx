import React from 'react'
import { CiCreditCard2, CiHeart } from 'react-icons/ci'
import { FaHeadphonesAlt } from 'react-icons/fa';
import { FaRegUser } from 'react-icons/fa6'
import { IoIosLogOut } from 'react-icons/io';
import { PiAddressBookLight, PiHandbagLight } from "react-icons/pi";
import { TbGiftCard } from "react-icons/tb";
import { Link } from 'react-router-dom';

const TreckOrder = () => {
    return (
        <>
            <div className="bg-[#f3f3f3] min-w-screen-xxl h-full p-6">

                <div className="flex gap-8">
                    {/* Sidebar */}
                    <div className="bg-white w-64 p-6 rounded shadow-sm">

                        <div className="flex flex-col items-center text-center border-b pb-4 mb-4">
                            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-xl font-semibold text-gray-600">
                                a
                            </div>
                            <p className="mt-2 text-gray-600 font-medium">Hello,</p>
                            <p className="text-sm text-gray-500">user123@gmail.com</p>
                        </div>

                        <ul className="space-y-4 text-sm font-medium text-gray-700">
                            <li className="flex items-center gap-5 cursor-pointer hover:text-black">
                                <Link to='/treckorder/profile' className='flex items-center gap-5 '><FaRegUser size={20} /> My Profile</Link>
                            </li>
                            <li className="flex items-center gap-5 cursor-pointer hover:text-black">
                                <Link to='/treckorder/orders' className='flex items-center gap-5 '> <PiHandbagLight size={20} /> My Orders</Link>
                            </li>
                            <li className="flex items-center gap-5 cursor-pointer hover:text-black">
                                <Link to='/treckorder/wishlist' className='flex items-center gap-5'> <CiHeart size={20} />My Wishlist</Link>
                            </li>
                            <li className="flex items-center gap-5 cursor-pointer hover:text-black">
                                <Link to='/treckorder/credits' className='flex items-center gap-5'><CiCreditCard2 size={20} /> My Credits</Link>
                            </li>
                            <li className="flex items-center gap-5 cursor-pointer hover:text-black">
                                <Link to='/treckorder/vouchers' className='flex items-center gap-5'><TbGiftCard size={20} /> My Vouchers</Link>
                            </li>
                            <li className="flex items-center gap-5 cursor-pointer hover:text-black">
                                <Link to='/treckorder/addresses' className='flex items-center gap-5'><PiAddressBookLight size={20} /> My Addresses</Link>
                            </li>
                            <li className="flex items-center gap-5 cursor-pointer hover:text-black">
                                <Link to='/treckorder/contactus' className='flex items-center gap-5'><FaHeadphonesAlt size={20} /> Contact Us</Link>
                            </li>


                            <li className="flex items-center gap-5 cursor-pointer hover:text-black">
                                <Link to='/treckorder/logout' className='flex items-center gap-5'> <IoIosLogOut size={20} />Logout</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}

export default TreckOrder
