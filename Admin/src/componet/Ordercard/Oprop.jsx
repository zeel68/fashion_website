import React from 'react'
import { CiMenuKebab } from "react-icons/ci"
import { IoBagHandleOutline } from "react-icons/io5"
import { FaArrowUp } from "react-icons/fa";

const Oprop = ({ text, totle, pr, comp }) => {
    return (
        <div className="p-[5px] box-border sm:w-1/2 lg:w-1/4 md:h-1/4 ">
            <div className="bg-white rounded-md shadow-md p-[10px]">
                <div className="flex flex-wrap items-center justify-between mb-5">
                    <p className="text-black font-bold">{text}</p>
                    <CiMenuKebab className="text-black text-2xl" />
                </div>
                <div className="py-[15px] text-center flex justify-between">
                    <div className='flex items-center'>
                        <div className="flex items-center justify-center bg-[#00538A] rounded-md">
                            <IoBagHandleOutline className="icon text-3xl m-[3px] p-[5px] text-white" />
                        </div>
                        <span className="block text-xl font-medium text-gray-800 px-[5px]">{totle}</span>
                    </div>
                    <span className="font-medium mt-1 flex items-center">
                        <FaArrowUp className='p-[2px]' />{pr}</span>
                </div>
                <p className="text-sm text-gray-500 text-end">{comp}</p>
            </div>

        </div>
    )
}
export default Oprop

