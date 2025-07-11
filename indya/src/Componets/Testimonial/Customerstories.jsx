import React from 'react'
import { useContext } from 'react';
import { ProductContext } from '../Context';
import Trendprop from '../Menstrend/trendprop';

const Customerstories = ({ category }) => {
    const { products } = useContext(ProductContext);
    const filteredProducts = category
        ? products.filter(p => p.category?.toLowerCase() === category.toLowerCase())
        : products;
    return (
        <>
            <div className='main py-[15px]'>
                <div className="max-w-screen-xxl mx-auto px-[5px]">
                    <div className="flex flex-wrap justify-center bg-[#fbfbfb]">

                        <div className="w-[80%] col-span-3 grid grid-cols-4 gap-[5px]">
                            {filteredProducts.map((product, index) => (

                                <Trendprop
                                    key={index}
                                    id={product.id}
                                    image={product.image}
                                    name={product.name}
                                    img2={product.img2}
                                    oldprice={product.oldprice}
                                    delivery={product.delivery}
                                />

                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Customerstories