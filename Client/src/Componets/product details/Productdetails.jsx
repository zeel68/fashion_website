import React, { useEffect, useState } from 'react';
import ProductTop from './ProductTop';
import ProductTopRight from './ProductTopRight';
import ProductBottom from './ProductBottom';
import AlsoLike from './AlsoLike';
import { Link, useParams } from 'react-router-dom';
import Breadcrum from '../Breadcrum/Breadcrum';

const Productdetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`https://dhaneri-backend-7nkti8s6z-zeshs-projects.vercel.app/api/storefront/store/6874da6ef34b88733c0b452c/products/${id}`);
                const data = await res.json();
                setProduct(data.data.product);
                console.log("Details", data.data.product);
            } catch (err) {
                console.error("Failed to fetch product:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const path = [
        { name: "Home", link: "/" },
        // { name: category, link: `/${category.toLowerCase()}` },
    ];

    if (loading) return <div>Loading product...</div>;
    if (!product) return <div>Product not found</div>;

    return (
        <>
            <div className="block mb-[50px] font-['Lato']">
                <div className="max-w-screen-xxl mx-auto px-4 box-border sm:px-6 lg:px-8">
                    <Breadcrum path={path} current={product.name} />

                    <div className="flex flex-wrap justify-between">
                        {/* left-side */}
                        <ProductTop product={product} />
                        {/* right-side */}
                        <ProductTopRight product={product} />
                        {/* bottom similary */}
                        <ProductBottom category="DEMO" product={product} />
                        {/* Also Like */}
                        <AlsoLike category="DEMO" />

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
    );
};

export default Productdetails;
