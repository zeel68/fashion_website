import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { ProductContext } from '../Context';

const Trendprop = ({ image, img2, name, price, oldprice, id }) => {

    return (
        <>
            <Link to={`/saree/${id}`} onClick={() => window.scrollTo(0, 0)}>

                <div className="px-[5px]">

                    <div className="relative w-full overflow-hidden group">
                        {/* Img 1  */}

                        <div className="absolute top-2 right-2 h-[40px] w-[40px] bg-black text-white text-[11px] font-semibold px-2.5 py-1 rounded-full z-10">
                            60% OFF
                        </div>

                        <img
                            className="w-full transition-opacity duration-[400ms] ease-in-out group-hover:opacity-0"
                            src={image}
                            alt="saree"
                        />
                        {/* img 2 Hover */}
                        <img
                            className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-[400ms] ease-in-out opacity-0 group-hover:opacity-100"
                            src={img2}
                            alt="saree-hover"
                        />
                        <div className="absolute bottom-0 left-0 text-center bg-[rgba(226,226,226)] p-[5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className='text-[12px] font-semibold'>
                                Sizes XS, S, M, L, XL, 2XL, 3XL, 4XL, 5XL, 6XL, 7XL, 8XL, Unstitched
                            </p>
                        </div>

                    </div>

                    <div className="details">
                        <p className='text-[13px] font-semibold'>{name}</p>
                        <span className='text-[14px] text-[#d3b951] font-semibold pr-2'> {price}</span>
                        {/* <span className='text-[14px] font-semibold line-through'> {oldprice}</span> */}
                    </div>
                </div>

            </Link>
        </>
    )
}

export default Trendprop