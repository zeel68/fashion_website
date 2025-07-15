import React, { useContext, useState } from 'react'
import ProductTop from './ProductTop';
import ProductTopRight from './ProductTopRight';
import ProductBottom from './ProductBottom';
import AlsoLike from './AlsoLike';
import { Link } from 'react-router-dom';

const Productdetails = () => {
    
    return (
        <>
            <div className="block mb-[50px] font-['Lato']">
                <div className="max-w-[1440px] mx-auto px-4 box-border sm:px-6 lg:px-8">
                 
                    <div className="flex flex-wrap justify-between">

                        {/* left-side */}
                        <ProductTop />
                        
                        {/* right-side */}
                        <ProductTopRight />
                        {/* bottom similary */}
                        <ProductBottom category="Mens" />
                        {/* Also Like */}
                        <AlsoLike category="Mens" />

                        <div className="w-full mx-auto flex justify-center gap-4 px-4">
                            <div className="w-full md:w-[46%] pt-[50px] text-center">
                                <Link className="block border border-[#dcdcdc] uppercase py-[17px] font-bold hover:bg-black hover:text-white transition duration-300 ease-in-out">
                                    More Plus Size Saree
                                </Link>
                            </div>
                            <div className="w-full md:w-[46%] pt-[50px] text-center">
                                <Link className="block border border-[#dcdcdc] uppercase py-[17px] font-bold hover:bg-black hover:text-white transition duration-300 ease-in-out">
                                    More Red  Plus Size Saree
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Productdetails