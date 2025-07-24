import React, { useContext } from 'react';
import { useParams } from "react-router-dom";
import { ProductContext } from '../Context';

const ProductTop = () => {
    const { id } = useParams();
    const { products } = useContext(ProductContext);

    const product = products.find(p => p._id === id);

    if (!product) return <div>Product not found</div>;

    return (
        <div className="w-full max-w-[65%]">
            <div className="flex flex-wrap gap-2 mb-5">
                {product.images && product.images.map((imgUrl, i) => (
                    <img key={i} className="w-[48%]" src={imgUrl} alt={`image`} />
                ))}
            </div>
        </div>
    );
};

export default ProductTop;
