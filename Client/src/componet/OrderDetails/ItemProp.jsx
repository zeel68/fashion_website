import React from 'react';
import { Link } from "react-router-dom";

const Itemprop = ({ id, name, img, price }) => {
    return (
        <Link to={`/home/product/${id}`}>
            <div className="border rounded-md p-4 hover:shadow-md cursor-pointer">
                <img src={img} alt={name} className="w-full h-[150px] object-cover" />
                <h3 className="mt-2 font-semibold">{name}</h3>
                <p className="text-[#00538A]">{price}</p>
            </div>
        </Link>
    );
};

export default Itemprop;
