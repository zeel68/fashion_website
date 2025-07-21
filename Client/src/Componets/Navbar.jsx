import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleRight, FaIndianRupeeSign } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
// import { IoBagHandle } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { ProductContext } from './Context';
import Login from './Login';

const Navbar = ({ category }) => {
    const Nav = ["Category", "Women_clothing", "KurtaSet", "SalwarKameez", "Shirts", "Sarees", "Mens", "Kids", "Jewellery", "Blouses", "Dupattas", "Festivals", "Home_Living"];
    const { products } = useContext(ProductContext);
    // const filtered = products.filter(item => item.category === category);
    // const filteredProducts = category
    //     ? products.filter(p => p.category?.toLowerCase() === category.toLowerCase())
    //     : products;

    const filteredProducts = category
        ? (products || []).filter(p => p.category?.toLowerCase() === category.toLowerCase())
        : (products || []);

    const [active, setactive] = useState(Nav[0]);
    const [menu, setmenu] = useState(false);

    const { cartItem } = useContext(ProductContext)
    const totalCartItems = Object.values(cartItem).reduce((sum, qty) => sum + qty, 0);

    // login pop-pop
    const [showLogin, setShowLogin] = useState(false);
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="block font-['lato'] max-w-screen-xxl  mx-auto">

                <div className="h-[29px] bg-black top-0 w-full text-center text-white">
                    <p>THURSDAY TO SUNSLAY – LAST DAY | UP TO 60% OFF</p>
                </div>

                <div className="border-b border-b-[#ccc] relative">
                    <div className="px-4 sm:px-6 lg:px-8 relative h-[80px] flex items-center justify-center">

                        {/* logo */}
                        <Link to="/" className="absolute left-1/2 transform -translate-x-1/2">
                            <img src="/assets/img/dhaneri.png" alt="Site Logo" className="w-[70px] object-cover object-center" />
                        </Link>

                        {/* Right-side hader*/}
                        <div className="absolute right-4 justify-center flex items-center">
                            <ul className="flex flex-wrap text-[11px] items-center">
                                <li><Link to="/WeddingGuide" className="px-2 text-red-700">Wedding Guide 2025</Link><span className="text-[#ccc]">|</span></li>
                                <li><Link to="/treckorder" className="px-2">Track Order</Link><span className="text-[#ccc]">|</span></li>
                                <li><Link to="/Wholesale" className="px-2">Wholesale</Link><span className="text-[#ccc]">|</span></li>
                                <li><Link to="/Affiliate" className="px-2 text-red-700">Affiliate</Link><span className="text-[#ccc]">|</span></li>
                                <li><Link to="/storelocatore" className="px-2">Store Locator</Link><span className="text-[#ccc]">|</span></li>

                                {/* Login / Logout */}
                                {localStorage.getItem('auth-token') ? (
                                    <li>
                                        <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace("/") }} className="px-2">Logout</button>
                                        <span className="text-[#ccc]">|</span>
                                    </li>
                                ) : (
                                    <li>
                                        <button onClick={() => setShowLogin(true)} className="px-2">Login</button>
                                        <span className="text-[#ccc]">|</span>
                                    </li>
                                )}

                                <li>
                                    <button onClick={() => setShowLogin(true)} className="px-2">Signin</button>
                                    <span className="text-[#ccc]">|</span>
                                </li>

                                {/* Cart Icon */}
                                <li>
                                    <Link to="/cart" className="relative px-2 flex items-center justify-center">
                                        <IoCartOutline size={20} />
                                        {totalCartItems > 0 && (
                                            <span className="absolute -top-1 -right-1 bg-[#d4b952] text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                                {totalCartItems}
                                            </span>
                                        )}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Login Popup */}
                    {showLogin && <Login onClose={() => setShowLogin(false)} />}

                </div>

                {/* mega menu*/}
                <div className=" px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center my-[10px] justify-between">
                        <div className="flex flex-wrap m-[-15px]">
                            <ul className='flex flex-wrap relative'>
                                {Nav.map((category, index) => (
                                    <div key={index} className='' onMouseEnter={() => { setactive(category); setmenu(true); }} onMouseLeave={() => setmenu(false)} >
                                        <li className='flex items-center hover:bg-[#ccc] hover:text-black'>
                                            <Link
                                                to={`/${category.toLowerCase().replace(/\s+/g, "-")}`}
                                                className='py-[10px] flex items-center px-[8px] text-[#222222] text-[14px] relative'>
                                                {category}
                                                {index === 0 && <FaAngleDown className="text-[11px] text-black ml-1" />}
                                            </Link>
                                        </li>

                                        {/* Mega Menu */}
                                        {menu && active === category && (
                                            <div className="absolute top-[45px] h-[450px] left-5 right-0 w-[1300px] bg-white z-50">
                                                <div className="absolute top-0 left-0 w-full px-4 flex bg-white border-t border-t-[#ccc] z-50">

                                                    {/* firstpart */}
                                                    <ul className='w-1/4 border-r border-[#ccc] uppercase overflow-y-auto px-[10px] pt-[4px]'>
                                                        {Nav.map((item, i) => (
                                                            <li key={i} className={`flex items-center relative rounded-2xl hover:bg-[#ccc] hover:text-black px-[5px] transition duration-300 ease-in-out ${active === item ? 'bg-[#ccc] text-black' : ''}`} onClick={() => setactive(item)}>
                                                                <Link className='py-[10px] px-[8px]'>{item}</Link>
                                                                <FaAngleRight className='text-[#ccc] absolute right-5' />
                                                            </li>
                                                        ))}
                                                    </ul>

                                                    {/* second part */}
                                                    <div className="w-3/4 flex overflow-y-auto">

                                                        {/* second part */}
                                                        <div className="w-1/2 p-4 border-r border-[#ccc] h-[400px] overflow-y-auto">
                                                            <div className="text-[14px] uppercase font-bold text-[#c44a01] mb-[15px]">
                                                                Shop by Category
                                                            </div>
                                                            <div className="flex flex-wrap">
                                                                {filteredProducts.filter(item => item.category === active).map((item) => (
                                                                    <div key={item.id} className="w-[25%] mb-[20px] justify-center items-start">
                                                                        <div className="p-4">
                                                                            <div className='w-[64px] h-[64px] bg-[#e6e6e6] rounded-full overflow-hidden mx-auto mb-[4px] flex items-center justify-center'>
                                                                                <Link to={`/${category.toLowerCase().replace(/\s+/g, "-")}`}>
                                                                                    <img src={item.image || item.img} className='w-full' alt={item.title} />
                                                                                </Link>
                                                                            </div>
                                                                            <div className='mt-4 flex justify-center text-[12px]'>{item.name}</div>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>


                                                        {/* third */}
                                                        <div className="w-1/2 p-4 h-[400px] overflow-y-auto">
                                                            <div className="text-[14px] uppercase text-[#c44a01] mb-[15px] font-bold">
                                                                New arrivals
                                                            </div>
                                                            <div className="flex flex-wrap">
                                                                {filteredProducts.filter(item => item.category === active).map((item) => (
                                                                    <div key={item.id} className="w-[25%] mb-[20px] justify-center items-start">
                                                                        <div className="p-4">
                                                                            <div className='w-[64px] h-[64px] bg-[#e6e6e6] rounded-full overflow-hidden mx-auto mb-[4px] flex items-center justify-center'>
                                                                                <Link to={`/${category.toLowerCase().replace(/\s+/g, "-")}`}>
                                                                                    <img src={item.image || item.img} className='w-[100%] h-full object-center object-cover' alt={item.title} />
                                                                                </Link>
                                                                            </div>
                                                                            <div className='mt-4 flex justify-center text-[12px]'>{item.name}</div>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </ul>
                        </div>

                        {/* Search and Currency */}
                        <div className="flex flex-wrap">
                            <div className="flex gap-5 items-center align-middle justify-between">
                                <div className="flex items-center">
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className={`border border-gray-400 px-2 py-1 transition-all duration-300 overflow-hidden ${open ? 'w-40 opacity-100' : 'w-0 opacity-0'}`}
                                    />
                                    <FaSearch onClick={() => setOpen(!open)} className="cursor-pointer ml-2" />
                                </div>
                                <div className="flex align-middle justify-around items-center w-[80px] border border-[#ccc]">
                                    <FaIndianRupeeSign />
                                    INR
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="block">
                    <div className="flex flex-wrap text-center">
                        <div className="bg-[#f6f1db] w-[33.33333%] text-[12px] p-[7px]"><Link className='p-[7px]'>End of June Sale | Up to 60% OFF Ends Tonight</Link></div>
                        <div className="bg-[#ede8d8] w-[33.33333%] text-[12px] p-[7px]"><Link className='p-[7px]'>Reveal Your Destiny With Indian Astrology</Link></div>
                        <div className=" bg-[#f6f1db] w-[33.33333%] text-[12px] p-[7px]"><Link className='p-[7px]'>Ready To Ship | 3 Day Delivery</Link></div>
                    </div>
                </div>

            </div >
        </>
    );
};

export default Navbar;

