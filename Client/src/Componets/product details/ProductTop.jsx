import React from 'react';
import { Product } from '../Sarees/Sareeprop';
import { useContext } from 'react';
import { ProductContext } from '../Context';
import { useParams } from "react-router-dom";
import SareesDetails from '../Sarees/Sareedetails';

const ProductTop = () => {
    // const { products } = useContext(ProductContext);

    // const { id } = useParams();
    // const product = products.find(item => item.id === parseInt(id));

    // if (!product) {
    //     return <div className="text-red-600 font-bold">Product not found</div>;
    // }

    return (
        <div className="w-full max-w-[65%]">
            <div className="flex flex-wrap gap-2 mb-5">
                <img className="w-[48%]" src={product.img} alt="img1" />
                <img className="w-[48%]" src={product.img2} alt="img2" />
                <img className="w-[48%]" src={product.img2} alt="img3" />
                <img className="w-[48%]" src={product.img2} alt="img4" />
            
            </div>
        </div>
    );
};

export default ProductTop;
