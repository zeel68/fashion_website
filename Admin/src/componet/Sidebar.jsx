import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineDashboard } from "react-icons/md";
import { BsBox2 } from "react-icons/bs";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
    const [menu, setmenu] = useState(false);
    const toggleShop = () => setmenu(!menu);

    return (
        <>
            {sidebarOpen && <div className="overlay" onClick={() => setSidebarOpen(false)}></div>}

            <aside className={`flex w-[20%] bg-[#E0F0FB] border border-[#00538A] sidebar ${sidebarOpen ? 'active' : ''}`}>
                <div className="p-[15px]">

                    <div className="img">
                        <img className="block w-[75%] mx-[15%]" src="..\src\assets\image.png" alt="logo" />
                    </div>
                    <div className="mt-[32px]">
                        <div className="inner-items">

                            <div className="m-[15px] flex flex-col gap-2">
                                <NavLink
                                    to="/home"
                                    end
                                    className={({ isActive }) =>
                                        `flex rounded-[10px] p-[10px] items-center ${isActive ? 'bg-[#00538A] text-white' : 'hover:bg-[#00538A] hover:text-white'
                                        }`
                                    }
                                >
                                    <MdOutlineDashboard className="m-[5px]" />
                                    <p className="ml-[15px] p-[5px] font-medium text-[14px] tracking-tight uppercase">DASHBOARD</p>
                                </NavLink>

                                <NavLink
                                    to="/home/product"
                                    className={({ isActive }) =>
                                        `flex rounded-[10px] p-[10px] items-center ${isActive ? 'bg-[#00538A] text-white' : 'hover:bg-[#00538A] hover:text-white'
                                        }`
                                    }
                                >
                                    <BsBox2 className="m-[5px]" />
                                    <p className="ml-[15px] p-[5px] font-medium text-[14px] tracking-tight uppercase">ALL PRODUCTS</p>
                                </NavLink>

                                <NavLink
                                    to="/home/orderlist"
                                    className={({ isActive }) =>
                                        `flex rounded-[10px] p-[10px] items-center ${isActive ? 'bg-[#00538A] text-white' : 'hover:bg-[#00538A] hover:text-white'
                                        }`
                                    }
                                >
                                    <HiOutlineClipboardDocumentList className="m-[5px]" />
                                    <p className="ml-[15px] p-[5px] font-medium text-[14px] tracking-tight uppercase">ORDER LIST</p>
                                </NavLink>
                            </div>

                            <div className="flex text-[#232323] relative justify-start items-center cursor-pointer hover:rounded-md hover:bg-[#00538A] hover:text-[#ffffff] " onClick={toggleShop}>
                                <p className='px-[20px] py-[10px]'>Categories</p>
                                <i className="fa-solid fa-chevron-down absolute right-2 text-[16px] font-semibold"></i>
                            </div>
                            {menu && (
                                <div className="ml-[15px] block transition-all duration-300 ease-in-out">
                                    <ul className='list-none'>
                                        <li className='p-[7px] transition-all duration-500'><Link to="/home" className="flex justify-between items-center">Lorem ipsum
                                            <span className="bg-[#E7E7E3] text-black text-sm rounded px-[10px] py-[7px] hover:bg-[#00538A] hover:text-[#ffffff]">21</span></Link></li>
                                        <li className='p-[7px] transition-all duration-500 '><Link to="/home" className="flex justify-between items-center">Lorem ipsum
                                            <span className="bg-[#E7E7E3] text-black text-sm rounded px-[10px] py-[7px] hover:bg-[#00538A] hover:text-[#ffffff]">21</span></Link></li>
                                        <li className='p-[7px] transition-all duration-500'><Link to="/home" className="flex justify-between items-center">Lorem ipsum
                                            <span className="bg-[#E7E7E3] text-black text-sm rounded px-[10px] py-[7px] hover:bg-[#00538A] hover:text-[#ffffff]">21</span></Link></li>
                                        <li className='p-[7px] transition-all duration-500'><Link to="/home" className="flex justify-between items-center">Lorem ipsum
                                            <span className="bg-[#E7E7E3] text-black text-sm rounded px-[10px] py-[7px] hover:bg-[#00538A] hover:text-[#ffffff]">21</span></Link></li>
                                        <li className='p-[7px] transition-all duration-500'><Link to="/home" className="flex justify-between items-center">Lorem ipsum
                                            <span className="bg-[#E7E7E3] text-black text-sm rounded px-[10px] py-[7px] hover:bg-[#00538A] hover:text-[#ffffff]">21</span></Link></li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;
