import React from 'react'
import Testimonialprop from './Testimonialprop'
// import SareesDetails from '../Sarees/Sareedetails';
import Trendprop from '../Menstrend/trendprop';
import { useContext } from 'react';
import { ProductContext } from '../Context';
import { Link } from "react-router-dom";

const Testimonial = ({ category }) => {
    // const filteredProducts = category
    //     ? SareesDetails.filter((product) =>
    //         product.category &&
    //         product.category.toLowerCase() === category.toLowerCase()
    //     )
    //     : SareesDetails;
    
    const { products } = useContext(ProductContext);
    const filteredProducts = category
        ? products.filter(p => p.category.toLowerCase() === category.toLowerCase())
        : products;

    return (
        <>
            <div className='main py-[15px]'>
                <div className="max-w-screen-xxl mx-auto px-[5px]">
                    <div className="inner-main bg-[#fbfbfb]">
                        <div className="flex justify-center p-[25px]">
                            <h3 className='text-[25px] font-bold'>
                                CUSTOMER TESTIMONIALS
                            </h3>
                        </div>

                        <div className="flex">
                            <div className="w-[33.33%] flex flex-wrap justify-center items-center">
                                <img src="./assets/img/Testimonial1.jpg" alt="1" />
                            </div>
                            <div className="w-[67%] col-span-3 grid grid-cols-4 gap-[5px]">
                                {filteredProducts.map((product, index) => (

                                    <Trendprop
                                        key={index}
                                        id={product.id}
                                        image={product.image}
                                        img2={product.img2}
                                        oldprice={product.oldprice}
                                        delivery={product.delivery}
                                    />

                                ))}
                                {/* <Testimonialprop img="./assets/img/Testimonial2.jpg" />
                                <Testimonialprop img="./assets/img/Testimonial3.jpg" />
                                <Testimonialprop img="./assets/img/Testimonial4.jpg" />
                                <Testimonialprop img="./assets/img/Testimonial5.jpg" />
                                <Testimonialprop img="./assets/img/Testimonial6.jpg" />
                                <Testimonialprop img="./assets/img/Testimonial7.jpg" />
                                <Testimonialprop img="./assets/img/Testimonial8.jpg" /> */}


                                <Link to={'/customerstories'}> <div className="flex items-center justify-center bg-[#fefbee] text-black font-semibold text-[16px] h-[95%] w-[95%]">
                                    EXPLORE MORE
                                </div></Link>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Testimonial