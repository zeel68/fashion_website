import React, { useContext, useEffect, useRef } from 'react'
import { FaChevronLeft, FaChevronRight, FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import SareeProps from './SareeProps';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ProductContext } from '../Context';
// import SareesDetails from '../Sarees/Sareedetails';

const AlsoLike = ({ category }) => {
      const { products } = useContext(ProductContext);
    
    const filtered = products.filter(item => item.category === category);

    
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);


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


            <div className="pt-[40px] mt-[5%] border-t  w-full border-t-[#dcdcdc]">
                {/* top */}
                <div className="text-center py-[25px]">
                    <h4 className='px-[20px]'>
                        <span className='bg-white font-bold font-["Lato"] text-[20px] py-[12px] uppercase'>You May Also Like</span>
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
                            <SwiperSlide key={item.id}>
                                <SareeProps
                                    id={item.id}
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

export default AlsoLike