import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { ProductContext } from '../Context';

const Trendprop = ({ image, name, price, oldprice, id }) => {

    return (
        <>
            <Link to={`/saree/${id}`} onClick={() => window.scrollTo(0, 0)}>

                <div className="px-[5px]">
                    <div className="img">
                        <img className='w-full block' src={image} alt="homeofferimg" />
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