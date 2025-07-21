import React, { useEffect, useRef, useState } from 'react';
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

    const [images, setImages] = useState([]);

    useEffect(() => {

        const fetchImages = async () => {
            try {
                const res = await fetch('http://65.1.3.198:5050/api/storefront/store/6874da6ef34b88733c0b452c/hero');
                const data = await res.json();
                console.log("Fetched hero data:", data);
                setImages(data?.data || []);
            } catch (err) {
                console.error("Error fetching hero images:", err);
            }
        };
        fetchImages();
    }, []);

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
    }, [images]); // update when images are loaded

    return (
        <div className="relative w-full">
            <button ref={prevRef} className="absolute w-[40px] h-[40px] top-[50%] left-[2%] transform -translate-y-1/2 z-10 px-2 py-2 bg-white text-[#d3b951] border border-[#d0d0d0] rounded"><FaChevronLeft /></button>
            <button ref={nextRef} className="absolute w-[40px] h-[40px] top-[50%] right-[2%] transform -translate-y-1/2 z-10 px-2 py-2 bg-white text-[#d3b951] border border-[#d0d0d0] rounded"><FaChevronRight /></button>

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
                {images.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={item.image_url}
                            alt={`Slide ${index}`}
                            className="w-full h-auto object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Hero;
