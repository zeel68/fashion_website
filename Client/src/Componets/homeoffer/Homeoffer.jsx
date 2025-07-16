import React from 'react';
import Offerprop from './offerprop';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FreeMode, Navigation } from 'swiper/modules';
import { useContext } from 'react';
import { ProductContext } from '../Context';
import SareesDetails from '../Sarees/Sareedetails';
import Trendprop from '../Menstrend/trendprop';

const Homeoffer = ({ category }) => {

    const { products } = useContext(ProductContext);

    // const filteredProducts = category
    //     ? products.filter(p => p.category?.toLowerCase() === category.toLowerCase())
    //     : products;
    const filteredProducts = category
        ? SareesDetails.filter(
            (product) =>
                product.category &&
                product.category.toLowerCase() === category.toLowerCase()
        )
        : SareesDetails;
    return (
        <>
            <div className='main py-[15px]'>
                <div className="max-w-screen-xxl mx-auto px-[5px]">
                    <div className="inner-main">
                        <div className="flex justify-center p-[25px]">
                            <h3 className='text-[25px] font-bold'>
                                CELEBS IN INDYA
                            </h3>
                        </div>
                        <style>
                            {`
                          .swiper-button-prev,
                          .swiper-button-next {
                          color: #d3b951; 
                          top: 50%;    
                          width: 35px;
                          height: 35px;
                          background-color: #fff;
                        //   border: 2px solid #d0d0d0; 
                          border-radius: 10px;
                          }
                          .swiper-button-prev::after,
                          .swiper-button-next::after {
                            font-size: 16px;
                             font-weight: 900;
                          }
                        `}
                        </style>
                        <Swiper
                            slidesPerView={2}
                            spaceBetween={10}
                            freeMode={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[FreeMode, Navigation]}
                            className="mySwiper"
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                768: { slidesPerView: 3 },
                                1024: { slidesPerView: 5 },
                            }}
                        >
                            {filteredProducts.map((product, index) => (
                                <SwiperSlide key={index}>
                                    <Trendprop
                                        id={product.id}
                                        image={product.img}
                                    // img2={product.img2}
                                    // name={product.name}
                                    // price={product.price}
                                    // oldprice={product.oldprice}
                                    // delivery={product.delivery}
                                    />
                                </SwiperSlide>
                            ))}
                            {/* <SwiperSlide><Offerprop img="./assets/img/celebs1.jpg" /></SwiperSlide>
                            <SwiperSlide><Offerprop img="./assets/img/celebs2.jpg" /></SwiperSlide>
                            <SwiperSlide><Offerprop img="./assets/img/celebs3.jpg" /></SwiperSlide>
                            <SwiperSlide><Offerprop img="./assets/img/celebs4.jpg" /></SwiperSlide>
                            <SwiperSlide><Offerprop img="./assets/img/celebs5.jpg" /></SwiperSlide>
                            <SwiperSlide><Offerprop img="./assets/img/celebs6.jpg" /></SwiperSlide>
                            <SwiperSlide><Offerprop img="./assets/img/celebs7.jpg" /></SwiperSlide>
                            <SwiperSlide><Offerprop img="./assets/img/celebs8.jpg" /></SwiperSlide> */}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Homeoffer;
