// SareeProps.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const SareeProps = ({ image, title, price, id }) => {
    return (
        <Link to={`/saree/${id}`} onClick={() => window.scrollTo(0, 0)}>
            <div className="box-border ">
                <img src={image} alt={title} />
                <p className='text-[14px] mt-[5px] font-bold'>{title}</p>
                <p className='text-[14px] mx-[3px] text-[#d3b951] font-bold'>₹ {price}</p>
            </div>
        </Link>
    );
};

export default SareeProps;
