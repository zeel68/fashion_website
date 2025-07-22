import React, { useContext, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { ProductContext } from '../Context';

const ProductTop = ({category}) => {
    const { id } = useParams();
    const { products } = useContext(ProductContext);

    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const filtered = products.filter(item => item.name?.toLowerCase().includes(category?.toLowerCase()));

    useEffect(() => {
        const fetchFeatured = async () => {
            try {
                const response = await fetch(`http://65.1.3.198:5050/api/storefront/store/6874da6ef34b88733c0b452c/products/6874da78f34b88733c0b473a`);
                const data = await response.json();
                setProduct(data.data.product);
                console.log("Products: ", data);
            } catch (err) {
                console.error("Failed to fetch product:", err);
                setError("Failed to fetch product details.");
            }
        };

        fetchFeatured();
    }, [id]);

    if (error) return <div className="text-black font-bold">{error}</div>;
    if (!product) return <div className="text-black font-bold">Product not found</div>;

    return (
        <div className="w-full max-w-[65%]">
            <div className="flex flex-wrap gap-2 mb-5">
                <img className="w-[48%]" src={product.image || product.img} alt="img1" />
                <img className="w-[48%]" src={product.image2 || product.img2} alt="img2" />
                <img className="w-[48%]" src={product.image3 || product.img3} alt="img3" />
                <img className="w-[48%]" src={product.image4 || product.img4} alt="img4" />
            </div>
        </div>
    );
};

export default ProductTop;
