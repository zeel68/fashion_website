import React from 'react';
import { Link } from 'react-router-dom';

const BoxbnrProps = ({ image, id }) => {
    return (
        <div className="px-[5px]">
            <Link to={`/saree/${id}`} onClick={() => window.scrollTo(0, 0)} className="block relative">
                <div className="img relative">
                    <img className="w-full shadow-sm object-cover mx-auto" src={image} alt="homeofferimg" />
                    <button type="button" className="absolute bottom-4 left-1/2 w-[95%] transform -translate-x-1/2 py-[8px] px-[20px] bg-black text-white text-center cursor-pointer rounded">
                        VIEW
                    </button>
                </div>
            </Link>
        </div>
    );
};

export default BoxbnrProps;
