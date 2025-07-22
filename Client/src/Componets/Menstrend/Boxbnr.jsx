import React, { useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { ProductContext } from '../Context';
import SareesDetails from '../Sarees/Sareedetails';
import BoxbnrProps from './BoxbnrProps ';
import { useParams } from 'react-router-dom';

const Boxbnr = ({ category }) => {
    const { id } = useParams();

    const { products } = useContext(ProductContext);

    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const filtered = products.filter(item => item.name?.toLowerCase().includes(category?.toLowerCase()));

    useEffect(() => {
        const Newarrival = async () => {
            try {
                const response = await fetch(`http://65.1.3.198:5050/api/storefront/store/6874da6ef34b88733c0b452c/products/new-arrivals?limit=8`);
                const data = await response.json();
                setProduct(data.data.product);
                console.log("New Arrival: ", data);
            } catch (err) {
                console.error("Failed to fetch product:", err);
                setError("Failed to fetch product details.");
            }
        };

        Newarrival();
    }, [id]);
    if (error) return <div className="text-black font-bold">{error}</div>;
    if (!product) return <div className="text-black font-bold">Product not found</div>;
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
                        {filtered.map((product, index) => (
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