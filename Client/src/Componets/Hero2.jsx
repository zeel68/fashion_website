import React, { useEffect, useRef } from 'react'
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Hero2 = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    const Imges = [
        {
            id: 1,
            img: "assets/img/hero1.png",
            title: "Festival Drop",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
            btn: "Shop Now"
        },
        {
            id: 2,
            img: "assets/img/hero2.png",
            info2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
            btn2: "Shop Now"
        }
    ]
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
            <div className="relative w-full max-w-screen-xxl">
                <button ref={prevRef} className="flex justify-center items-center absolute w-[40px] h-[40px] top-[50%] left-[2%] transform -translate-y-1/2 z-10 px-2 py-2 bg-white text-[#d3b951] border border-[#d0d0d0] rounded"><FaChevronLeft /></button>
                <button ref={nextRef} className="flex justify-center items-center absolute w-[40px] h-[40px] top-[50%] right-[2%] transform -translate-y-1/2 z-10 px-2 py-2 bg-white text-[#d3b951] border border-[#d0d0d0] rounded"><FaChevronRight /></button>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1}
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
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 1 },
                        1024: { slidesPerView: 1 },
                    }}
                >
                    {Imges.map((item) => (
                        <SwiperSlide key={item.id}>
                            <img
                                src={item.img}
                                alt={`Slide ${item.id}`}
                                className="w-full h-full object-cover relative"
                            />
                            <div className="text-[#121212] absolute bottom-25 ml-[25%] mr-[40%]">
                                <p className='font-bold text-[50px]'>{item.title}</p>
                                <p className='font-normal text-[15px] mb-10'>{item.info}</p>
                                <a className='font-bold border-1 border-[#121212B2] rounded-3xl  px-5 py-1' href="#">{item.btn}</a>
                            </div>
                            {/*  */}

                            <div className=" absolute bottom-20">
                                <div className="ml-[30px] mr-[800px]">
                                    <p className='font-normal text-[15px] mr-[20px]'>{item.info2}</p>
                                </div>
                                <div className="mb-[20px]">
                                    <a className='font-bold border-1 border-white rounded-3xl text-white px-5 py-1 ml-[85%]' href="#">{item.btn2}</a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </>
    )
}

export default Hero2