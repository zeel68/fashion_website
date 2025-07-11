import React from 'react'
import { FaUser } from 'react-icons/fa'
import { IoBagHandleOutline } from 'react-icons/io5'
import { MdLocalShipping, MdLogin, MdPayment } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Carthader = () => {
    return (
        <>
            <div className="block bg-[#f4f4f4] mb-10">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap align-middle justify-between">
                        <div className="flex flex-wrap justify-end items-center">
                            <Link to="/"><img src="/assets/img/logo.png" className='object-center object-cover w-[60px]' alt="Site Logo" /></Link>
                        </div>
                        <ul className='flex flex-wrap text-center'>
                            <li className='flex items-center justify-center text-center mx-2 my-2'>
                                <Link className='hover:text-[#d4b952] text-[#adadad] py-[11px] px-[30px] flex flex-col items-center'><IoBagHandleOutline size={30} className='text-[17px] mb-[5px]' />Bag</Link>
                            </li>
                            <li className='flex items-center justify-center text-center mx-2 my-2'>
                                <Link className='hover:text-[#d4b952] text-[#adadad] py-[11px] px-[30px] flex flex-col items-center'><MdLogin size={30} className='text-[17px] mb-[5px]' />Login</Link>
                            </li>
                            <li className='flex items-center justify-center text-center mx-2 my-2'>
                                <Link className='hover:text-[#d4b952] text-[#adadad] py-[11px] px-[30px] flex flex-col items-center'><MdLocalShipping size={30} className='text-[17px] mb-[5px]' />Shipping</Link>
                            </li>
                            <li className='flex items-center justify-center text-center mx-2 my-2'>
                                <Link className='hover:text-[#d4b952] text-[#adadad] py-[11px] px-[30px] flex flex-col items-center'><MdPayment size={30} className='text-[17px] mb-[5px]' />Payment</Link>
                            </li>
                        </ul>
                        <div className="flex flex-wrap align-middle justify-between w-[80px] text-[#adadad]">
                            <Link className='flex flex-row items-center gap-3'><FaUser />Guest</Link>
                        </div>
                    </div>



                </div>
            </div>
            

        </>
    )
}

export default Carthader