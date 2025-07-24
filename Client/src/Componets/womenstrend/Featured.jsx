
import React, { useContext, useEffect, useState } from 'react';
import Featuredprop from './Featuredprop';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../Context';
import Aos from 'aos';

const Featured = ({ category }) => {
    const { id } = useParams();
    const { products } = useContext(ProductContext);

    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const filtered = products.filter(item => item.name?.toLowerCase().includes(category?.toLowerCase()));
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    useEffect(() => {
        const fetchFeatured = async () => {
            try {
                const response = await fetch(`http://65.1.3.198:5050/api/storefront/store/6874da6ef34b88733c0b452c/products/featured?limit=8`);
                const data = await response.json();
                setProduct(data.data.product);
                console.log("Featured Products: ", data);
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
        <>
            <div className='main py-[10px]' data-aos="fade-up">
                <div className="max-w-screen-xxl mx-auto px-[5px]">
                    <div className="inner-main">

                        <div className="flex justify-center p-[25px]">
                            <h3 className='text-[25px] font-bold'>
                                AS FEATURED IN
                            </h3>
                        </div>

                        <div className='flex'>
                            {filtered.map((product, index) => (
                                <Featuredprop
                                    // key={index}
                                    // id={product.id}
                                    // image={product.image}
                                    image={product.img}
                                // img2={product.img2}
                                // name={product.name}
                                // price={product.price}
                                // oldprice={product.oldprice}
                                // delivery={product.delivery}
                                />
                            ))}
                            {/* <Featuredprop img="./assets/img/wbnr1.jpg" />
                            <Featuredprop img="./assets/img/wbnr2.jpg" />
                            <Featuredprop img="./assets/img/wbnr3.jpg" />
                            <Featuredprop img="./assets/img/wbnr4.jpg" />
                            <Featuredprop img="./assets/img/wbnr5.jpg" />
                            <Featuredprop img="./assets/img/wbnr6.jpg" /> */}
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}

export default Featured