import React, { useContext, useEffect, useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import SareeProps from './SareeProps';
import { Autoplay, Navigation } from 'swiper/modules';
import { useParams } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import SareesDetails from '../Sarees/Sareedetails';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';
import { ProductContext } from '../Context';

const ProductBottom = ({ category }) => {
    const { products = [] } = useContext(ProductContext) || {};
    const filtered = products.filter(item =>
        item.name?.toLowerCase().includes(category?.toLowerCase())
    );
    console.log("display Products: ", filtered);

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const [details, setDetails] = useState(false);
    const toggleDetails = () => setDetails(!details);

    const [shipping, setShipping] = useState(false);
    const toggleShipping = () => setShipping(!shipping);

    useEffect(() => {
        if (
            swiperRef.current &&
            prevRef.current &&
            nextRef.current &&
            swiperRef.current.params
        ) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);


    return (
        <>
            <div className="block">
                <p>Add Review</p>
                <input type="text" placeholder='Add Review' />
                <button>ADD</button>
            </div>
            {/* Description Section */}
            <div className="border-b border-b-[#dcdcdc] w-full">
                <div className="cursor-pointer pt-4 pb-4 text-[17px] font-bold flex justify-between items-center" onClick={toggleMenu}>
                    <span>Description</span>
                    {menuOpen ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {menuOpen && (
                    <ul className="pl-4 pb-4 text-[14px] leading-6 text-[#333]">
                        <li>Red Embroidered Poly Blend Saree Set - XSR30702</li>
                        <li>Main Color: Red</li>
                        <li>Package Contents: 2</li>
                        <li>Fabric: Poly Blend</li>
                        <li>Work: Embroidered</li>
                    </ul>
                )}
            </div>

            {/* Details Section */}
            <div className="border-b border-b-[#dcdcdc] w-full">
                <div className="cursor-pointer pt-4 pb-4 text-[17px] font-bold flex justify-between items-center" onClick={toggleDetails}>
                    <span>Details</span>
                    {details ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {details && (
                    <div className="text-[14px] text-[#292c3e] pt-2 leading-relaxed">
                        <p className='text-[16px] font-medium'>Elevate your ethnic wardrobe with our exquisite Red Embroidered Poly Blend Saree Set...</p>
                        <br />
                        <p>Quantity - 1N</p>
                        <p>Country of Origin : India</p>
                        <br />
                        <b>Manufactured and Packed by</b>
                        <p>High Street Essentials Private Limited<br />C-39, Sector 58, Noida, UP</p>
                        <br />
                        <b>For Customer Queries</b>
                        <p>Phone: +91-8929987349<br />Email: customercare@houseofindya.com</p>
                        <br />
                        <b>NOTE:</b> There might be a slight variation in shade due to screen/display effects.
                    </div>
                )}
            </div>

            {/* Shipping Section */}
            <div className="border-b border-b-[#dcdcdc] w-full">
                <div className="cursor-pointer pt-4 pb-4 text-[17px] font-bold flex justify-between items-center" onClick={toggleShipping}>
                    <span>Shipping & Returns</span>
                    {shipping ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {shipping && (
                    <div className="text-[14px] text-[#292c3e] pt-2">
                        <p>India Delivery: 10 Days | Returnable</p>
                        <p>International Delivery: 15 Days</p>
                        <p>Return Policy: Return within 7 days for store credit.</p>
                    </div>
                )}
            </div>


            <div className="pt-[40px] mt-[3%] w-full">
                {/* top */}
                <div className="text-center py-[25px]">
                    <h4 className='px-[20px]'>
                        <span className='bg-white font-bold font-["Lato"] text-[20px] py-[12px] uppercase'>Similar Products</span>
                    </h4>

                </div>

                {/* bottom */}

                <div className="relative px-[7px]">
                    <button ref={prevRef} className="absolute w-[40px] h-[40px] top-[50%] left-[2%] transform -translate-y-1/2 z-10 px-2 py-2 bg-white text-[#d3b951] border border-[#d0d0d0] rounded"><FaChevronLeft /></button>
                    <button ref={nextRef} className="absolute w-[40px] h-[40px] top-[50%] right-[2%] transform -translate-y-1/2 z-10 px-2 py-2 bg-white text-[#d3b951] border border-[#d0d0d0] rounded"><FaChevronRight /></button>

                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={10}
                        slidesPerView={5}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 5 },
                        }}
                    >
                        {filtered.map((item) => (
                            <SwiperSlide key={item._id}>
                                <SareeProps
                                    id={item._id}
                                    image={item.image}
                                    title={item.name}
                                    price={item.price}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default ProductBottom




