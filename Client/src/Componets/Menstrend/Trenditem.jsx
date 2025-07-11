import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FreeMode, Pagination, Navigation, Autoplay } from 'swiper/modules';
import Trendprop from './trendprop';
import { useContext } from 'react';
import { ProductContext } from '../Context';

// import SareesDetails from '../Sarees/Sareedetails';

const Trenditem = ({ category }) => {

    const { products } = useContext(ProductContext);
    // const filteredProducts = category
    //     ? products.filter((product) =>
    //         product.category &&
    //         product.category.toLowerCase() === category.toLowerCase()
    //     )
    //     : products;

    const filteredProducts = category
        ? products.filter(p => p.category?.toLowerCase() === category.toLowerCase())
        : products;

    return (
        <div className='main py-[10px]'>
            <div className="max-w-screen-xxl mx-auto px-[5px]">
                <div className="inner-main bg-[#fbfbfb]">
                    <style>
                        {`
                          .swiper-button-prev,
                          .swiper-button-next {
                              color: #d3b951; 
                              top: 50%;    
                              width: 35px;
                              height: 35px;
                              background-color: #fff;
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
                        modules={[FreeMode, Autoplay, Navigation]}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
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
                                    image={product.image}
                                    img2={product.img2}
                                    name={product.name}
                                    price={product.price}
                                    oldprice={product.oldprice}
                                    delivery={product.delivery}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Trenditem;
