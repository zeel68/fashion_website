import React, { useRef } from 'react'
import Breadcrum from '../Breadcrum/Breadcrum'
import products from '../AllProduct/allproducts';
import { useParams } from 'react-router-dom';
import { FaCircleCheck } from "react-icons/fa6";

const ProductD = () => {
    const { id } = useParams();
    const product = products.find(p => p.id.toString() === id);

    if (!product) return <p className="p-5 text-red-500">Order not found</p>;


    const fileInputRef = useRef(null);

    const handleDivClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            console.log("Selected File:", file.name);
        }
    };

    return (
        <>
            <div className="max-w-screen-xxl mx-auto px-[15px]">

                {/* hader */}
                <div className="py-[15px]">
                    <div className="md:mb-0">
                        <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
                        <Breadcrum
                            path={["Home", "All Product"]}
                            current="Product Details"
                        />
                    </div>
                </div>

                {/* product details */}

                <div className="p-[15px] bg-white rounded-md shadow-m">
                    <div className="lg:flex flex-row gap-6 md:flex max-w-7xl">

                        {/* Left Section */}
                        <div className="w-full lg:w-1/2">

                            <div className='mb-[10px]'>
                                product id: {id}
                            </div>

                            <div className='mb-[10px]'>
                                <label className="block font-medium text-lg">Product Name</label>
                                <input type="text" className="w-full rounded text-sm outline p-[5px]" />
                            </div>

                            <div className='mb-[10px]'>
                                <label className="block font-medium mb-[5px] text-lg">Product Description</label>
                                <textarea rows="3" className="w-full rounded text-sm outline  p-[5px]"></textarea>
                            </div>

                            <div className='mb-[10px]'>
                                <label className="block font-medium mb-[5px] text-lg">Category</label>
                                <input type="text" className="w-full outline  rounded text-sm p-[5px]" />
                            </div>

                            <div className='mb-[10px]'>
                                <label className="block font-medium text-lg">Brand Name</label>
                                <input type="text" className="w-full outline  rounded text-sm p-[5px]" />
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-[10px]">
                                <div>
                                    <label className="block font-medium  text-lg">SKU</label>
                                    <input type="text" className="w-full outline rounded text-sm p-[5px]" />
                                </div>
                                <div>
                                    <label className="block font-medium text-lg">Stock Quantity</label>
                                    <input type="number" className="w-full outline rounded text-sm p-[5px]" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-[10px]">
                                <div>
                                    <label className="block font-medium text-lg">Regular Price</label>
                                    <input type="text" className="w-full outline  rounded text-sm p-[5px]" />
                                </div>
                                <div>
                                    <label className="block font-medium  text-lg">Sale Price</label>
                                    <input type="text" className="w-full  outline rounded text-sm p-[5px]" />
                                </div>
                            </div>

                            <div className='mb-[10px]'>
                                <label className="block font-medium ">Tags</label>
                                <div className="border rounded-md h-[154px]">
                                    <div className="flex gap-2 flex-wrap p-[10px] ">
                                        <span className="bg-[#00538A] text-white px-[15px] py-[5px] rounded-full text-sm">Lorem</span>
                                        <span className="bg-[#00538A] text-white px-[15px] py-[5px] rounded-full text-sm">Lorem</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="w-full">
                            <div className="w-full aspect-square bg-[#E0F0FB] rounded shadow-md flex items-center justify-center mb-[10px]">
                                <span className="text-gray-400">Image Preview</span>
                            </div>

                            <div>
                                <label className="block font-medium mb-[10px]">Product Gallery</label>
                                <div>
                                    {/* img drop */}
                                    <div
                                        className="border border-dashed border-[#232321] rounded p-[15px] text-center text-sm text-gray-500 cursor-pointer"
                                        onClick={handleDivClick}
                                    >
                                        <div className="flex flex-col items-center justify-center">
                                            <img src="/src/assets/ph_image-light.png" alt="upload" className="w-8 mb-[5px]" />
                                            <p>Drop your images here, or <span className="text-blue-600 underline">browse</span></p>
                                            <p className="text-xs">(jpg, png are allowed)</p>
                                        </div>
                                    </div>
                                    <input
                                        type="file"
                                        accept="image/png, image/jpeg"
                                        ref={fileInputRef}
                                        className="hidden"
                                        onChange={handleFileChange}
                                    />
                                </div>

                                <div className="mt-[15px] space-y-3">
                                    {[...Array(4)].map((_, i) => (
                                        <div key={i}>
                                            <div className="flex gap-2 py-[6px]">
                                                <div className="w-10 h-10 bg-gray-200 rounded"></div>
                                                <div className="flex-1 ">
                                                    <span className="text-sm ">Product thumbnail.png</span>
                                                    <div className="w-full h-[3px] bg-[linear-gradient(to_right,_#00538A_60%,_#4A69E2_60%)] rounded"></div>
                                                </div>
                                                <FaCircleCheck className="text-[#00538A] mt-[10px] mr-[20px]" />
                                            </div>

                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            {/* <div className="flex justify-end gap-1 mt-[10px]">
                                <button className="bg-black text-white lg:px-[35px] sm:px-[10px] rounded hover:bg-[#3a3a3a]">Update</button>
                                <button className="bg-[#00538A] text-white lg:px-[35px] px-[10px] rounded hover:bg-[#00538ad5]">Delete</button>
                                <button className="bg-gray-200 text-black lg:px-[35px] px-[10px] rounded hover:bg-[#d8dadc]">Cancel</button>
                            </div> */}
                            <div className="flex justify-end gap-1 mt-[10px]">
                                <button className="bg-black text-white px-[10px] lg:px-[35px] rounded hover:bg-[#3a3a3a]">Update</button>
                                <button className="bg-[#00538A] text-white px-[10px] lg:px-[35px] rounded hover:bg-[#00538ad5]">Delete</button>
                                <button className="bg-gray-200 text-black px-[10px] lg:px-[35px] rounded hover:bg-[#d8dadc]">Cancel</button>
                            </div>

                        </div>

                    </div>


                </div>
            </div>
        </>
    )
}

export default ProductD