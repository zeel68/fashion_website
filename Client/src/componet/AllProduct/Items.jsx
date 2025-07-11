import React, { useEffect, useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";
import Itemprop from './itemprop';
import products from './allproducts';
import { IoIosClose } from "react-icons/io";

const Items = () => {
    const [currentPage, setCurrentPage] = useState(1);
    // const ProductsPerPage = 1;
    // const totalPages = Math.ceil(products.length / ProductsPerPage);
    // const indexOfLast = currentPage * ProductsPerPage;
    // const indexOfFirst = indexOfLast - ProductsPerPage;
    // const currentProducts = products.slice(indexOfFirst, indexOfLast);

    const [allproduct, setAllproduct] = useState([]);

    const fetchInfo = async () => {
        try {
            const res = await fetch('http://localhost:4040/allproduct');
            const data = await res.json();
            console.log("Fetched data:", data);
            setAllproduct(data);
        } catch (err) {
            console.error("Error fetching data:", err);
        }
    };

    useEffect(() => {
        fetchInfo();
    }, []);

    // remove

    const remove_product = async (id) => {
        try {
            await fetch('http://localhost:4040/remove', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: id })
            });
            await fetchInfo();
        } catch (err) {
            console.error("Error removing product:", err);
        }
    };

    return (
        <>
            <div className="flex-grow">
                <div className="p-[15px] sm:p-[12px] box-border max-w-screen-xxl ">
                    <div className="inner-main">

                        {/* Header Row */}
                        <div className="list-product flex justify-start p-4 font-semibold text-sm text-gray-700 border-b">
                            <p className="w-[6%]">Product</p>
                            <p className="w-[6%]">Product2</p>

                            <p className="w-[30%] text-center">Name</p>
                            <p className="w-[16.66%] text-center">Price</p>
                            <p className="w-[16.66%] text-center">Old Price</p>
                            <p className="w-[16.66%] text-center">Category</p>
                            <p className="w-[16.66%] text-center">Remove</p>
                        </div>

                        {/* Product List */}
                        <div className="allproduct p-4">
                            {allproduct.map((product, index) => (
                                <div key={index} className="flex justify-start items-center text-center py-[10px] border-b text-sm text-gray-800">
                                    <div className="w-[6%] flex p-[10px]">
                                        <img src={product.image} alt={product.name} className="w-[50px] object-cover" />
                                    </div>
                                    <div className="w-[6%] flex p-[10px]">
                                        <img src={product.img2} alt={product.name} className="w-[50px] object-cover" />
                                    </div>
                                    <p className="w-[30%] ">{product.name}</p>
                                    <p className="w-[16.66%] ">₹{product.price}</p>
                                    <p className="w-[16.66%] line-through text-red-400">₹{product.oldprice}</p>
                                    <p className="w-[16.66%] capitalize">{product.category}</p>

                                    <IoIosClose className="w-[16.66%] flex justify-center items-center text-xl"
                                        onClick={() => remove_product(product.id)} size={30} />

                                </div>
                            ))}
                        </div>

                        {/* <div className="flex flex-wrap gap-4 box-border justify-around">
                            {currentProducts.map(product => (
                                <Itemprop
                                    key={product.id}
                                    id={product.id}
                                    img={product.img}
                                    info={product.info}
                                    name={product.name}
                                    price={product.price}
                                    details={product.details}
                                    sales={product.sales}
                                    remaining={product.remaining}
                                />
                            ))}
                        </div> */}

                    </div>
                </div>
            </div >
        </>
    );
};


export default Items;

// {/* <div className="py-[20px] flex flex-wrap items-center">
//     // {/* pages num */}
//     {[1, 2, 3].map((page) => (
//         <button
//             key={page}
//             onClick={() => setCurrentPage(page)}
//             className={`border px-[12px] py-[5px] m-[5px] rounded-md ${currentPage === page
//                 ? 'bg-[#00538A] text-white'
//                 : 'hover:bg-[#00538A] hover:text-white'
//                 }`}
//         >
//             {page}
//         </button>
//     ))}

//     <span className="mx-2 font-semibold">...</span>
//     <button
//         onClick={() => setCurrentPage(totalPages)}
//         className={`border px-[12px] py-[5px] m-[5px] rounded-md ${currentPage === totalPages
//             ? 'bg-[#00538A] text-white'
//             : 'hover:bg-[#00538A] hover:text-white'
//             }`}
//     >
//         {totalPages}
//     </button>

//     // {/* next */}
//     {currentPage < totalPages && (
//         <button
//             onClick={() => setCurrentPage(currentPage + 1)}
//             className="border px-[15px] py-[5px] m-[5px] rounded-md hover:bg-[#00538A] hover:text-white flex items-center gap-1"
//         >
//             Next <FaAngleRight />
//         </button>
//     )}

// </div> */}