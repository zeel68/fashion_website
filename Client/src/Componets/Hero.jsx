import React, { useEffect, useRef } from 'react'
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
const Hero = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    const Imges = [
        {
            id: 1,
            img: "assets/img/Home1.png"
        },
        {
            id: 2,
            img: "assets/img/Home2.png"
        },
        {
            id: 3,
            img: "assets/img/Home3.png"
        },
        {
            id: 4,
            img: "assets/img/Home4.png"
        },
        {
            id: 5,
            img: "assets/img/Home5.png"
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
            <div className="relative w-full">
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
                                className="w-full h-auto object-cover"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </>
    )
}

export default Hero