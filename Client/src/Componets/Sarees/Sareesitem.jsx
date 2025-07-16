import React, { useContext, useState } from 'react'
import Sareeprop, { Product } from './Sareeprop'
import { IoMdArrowDropdown } from 'react-icons/io';
import Breadcrum from '../Breadcrum/Breadcrum';
import { ProductContext } from '../Context';
import SareesDetails from './Sareedetails';

const filters = {
    Categories: [
        { name: "Sarees (6526)" },
        { name: "Unstitched Sarees (5061)" },
        { name: "Luxe (3310)" },
        { name: "Pre Stitched Saree (194)" },
        { name: "Saree Skirts (43)" },
        { name: "Fusion Sarees (30)" },
        { name: "Exclusive Offers (18)" },
    ],
    Collection: [
        { name: "Contemporary (2000)" },
        { name: "Heritage (1800)" },
        { name: "Occasion (1500)" }
    ],
    Color: [
        { name: "Red (800)" },
        { name: "Blue (750)" },
        { name: "Green (600)" }
    ],
    Discount: [
        { name: "10% or more" },
        { name: "20% or more" },
        { name: "50% or more" }
    ],
    Fabric: [
        { name: "10% or more" },
        { name: "20% or more" },
        { name: "50% or more" }
    ],
    Occasion: [
        { name: "Wedding (1000)" },
        { name: "Casual (2000)" },
        { name: "Festive (1200)" }
    ],
    Pattern: [
        { name: "Printed (1500)" },
        { name: "Solid (1300)" },
        { name: "Embroidered (1200)" }
    ],
    Size: [
        { name: "Free Size (1000)" },
        { name: "S (400)" },
        { name: "M (600)" },
        { name: "L (500)" }
    ],
    Price: [
        { name: "Under ₹500" },
        { name: "₹500 - ₹1000" },
        { name: "₹1000 - ₹2000" },
        { name: "Above ₹2000" }
    ]
};

const Sareesitem = ({ category }) => {

    // const { SareesDetails } = useContext(ProductContext);

    // const { products } = useContext(ProductContext);
    // if (!products) return (null)

    // const filtered = products.filter(item => item.category === category);

    const [dropdown, setDropdown] = useState(false);
    const [selected, setSelected] = useState("Relevance");
    const options = ["Relevance", "New Arrivals", "Price: Low to High", "Price: High to Low", "Best Sellers"];

    const filteredProducts = category
        ? SareesDetails.filter((product) => product.category && product.category.toLowerCase() === category.toLowerCase())
        : SareesDetails;
        
    // const filteredProducts = category
    //     ? products.filter(p => p.category?.toLowerCase() === category.toLowerCase())
    //     : products;

    // const path = [{ name: "Home", link: "/" }]

    return (
        <div className='main py-[10px]'>
            <div className="max-w-screen-xxl mx-auto px-[15px]">
                <div className="inner-main flex w-full">
                    {/* Sidebar */}
                    <div className="right w-[20%] px-[5px]">
                        <p className='uppercase text-[20px] font-semibold border-b border-b-[#dcdcdc]'>
                            {category}
                        </p>
                    </div>

                    {/* main section*/}
                    <div className="left w-[80%] px-[5px]">
                        {/* 
                        <div className="breadcrum">
                            <Breadcrum path={path} current={category} />
                        </div> */}
                        {/* cat-collection Drop down */}

                        <div className="flex flex-wrap">
                            {Object.entries(filters).map(([title, options]) => (
                                <Sareeprop key={title} title={title} options={options} />
                            ))}
                        </div>

                        <div className="flex justify-between items-center text-[11px] border-t border-b border-[#dcdcdc]">
                            <ul className='font-semibold flex'>
                                <li><a href="">Sarees</a><span className='px-2 text-[#dcdcdc]'>|</span> </li>
                                <li><a href="">7282 STYLES FOUND</a><span className='px-2 text-[#dcdcdc]'>|</span></li>
                                <li><a href="">View 201</a></li>
                            </ul>

                            <div className="relative w-[120px] ">
                                <button onClick={() => setDropdown(!dropdown)} className="flex justify-between items-center font-semibold w-full px-2 py-1 bg-white">
                                    <span className="">Sort By: {selected}</span>
                                    <IoMdArrowDropdown />
                                </button>
                                {dropdown && (
                                    <ul className="absolute w-full bg-white border border-[#dcdcdc] z-10">
                                        {options.map((opt, i) => (
                                            <li key={i} onClick={() => { setSelected(opt); setDropdown(false); }} className="px-2 py-1 border-b border-b-[#dcdcdc] cursor-pointer">
                                                {opt}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>

                        {/* product section */}

                        <div className="py-[15px]">

                            <div className="flex flex-wrap gap-4">
                                {filteredProducts.map((product, index) => (
                                    <Product
                                        key={index}
                                        id={product.id}
                                        // image={product.image}
                                        image={product.img}
                                        img2={product.img2}
                                        name={product.name}
                                        price={product.price}
                                        oldprice={product.oldprice}
                                        delivery={product.delivery}
                                    />
                                ))}

                            </div>
                        </div>


                    </div>


                </div>
            </div>
        </div>
    )
}

export default Sareesitem;
