import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { ProductContext } from '../Context';
import SareesDetails from '../Sarees/Sareedetails';
import BoxbnrProps from './BoxbnrProps ';

const Boxbnr = ({ category }) => {
    const { products } = useContext(ProductContext);

    // const { products } = useContext(ProductContext);
    // if (!products) return <p>Loading products...</p>;

    // const filtered = products.filter(item =>
    //     item.name?.toLowerCase().includes(category?.toLowerCase())
    // );
    // console.log("Filtered Products: ", filtered);

    const filteredProducts = category
        ? SareesDetails.filter(
            (product) =>
                product.category &&
                product.category.toLowerCase() === category.toLowerCase()
        )
        : SareesDetails;

    return (
        <div className="main pt-[15px] pb-[30px]">
            <div className="max-w-screen-xxl px-[5px] mx-auto">
                <div className="inner-main">
                    <div className="flex justify-center items-center p-[25px]">
                        <h3 className="text-[25px] font-bold">NEW ARRIVALS</h3>
                    </div>

                    <Swiper
                        effect="coverflow"
                        grabCursor={true}
                        preventClicks={true}
                        slidesPerView="auto"
                        loop={true}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 100,
                            depth: 100,
                            modifier: 4,
                            slideShadows: false,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false,
                        }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 5 },
                        }}
                        navigation={true}
                        modules={[Autoplay, Navigation, EffectCoverflow]}
                        className="w-full h-full overflow-visible"
                    >
                        {filteredProducts.map((product, index) => (
                            <SwiperSlide
                                key={index}
                                className="rounded-lg w-full pointer-events-auto"
                            >
                                <BoxbnrProps
                                    id={product.id}
                                    image={product.img} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Boxbnr;
