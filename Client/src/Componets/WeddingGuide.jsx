import React from 'react'
import { Link } from 'react-router-dom'

const WeddingGuide = () => {
    return (
        <>
            <div className="block w-full max-w-screen-xxl mx-auto">

                <img src="assets/img/g1.png" className='w-full' alt="" />
                <img src="assets/img/g2.png" className='w-full' alt="" />

                <div className="max-w-screen-xxl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="flex justify-center align-middle items-center py-[3rem]">
                        <div className="w-[100%] max-w-[850px]">
                            <form className='pt-[2rem] flex flex-wrap justify-center'>
                                <div className="flex justify-between flex-wrap py-[15px] w-[80%]">
                                    <div className="w-[50%] px-[20px] block">
                                        <label htmlFor="" className='block uppercase text-[13px] font-bold pb-[10px]'>Email id*</label>
                                        <input type="email" className='block w-full outline-none text-[14px] bg-[#FCFBF5] p-[15px] border border-[#ccc] rounded-[5px]' placeholder='Enter Email id' />
                                    </div>
                                    <div className="w-[50%] px-[20px] block">
                                        <label htmlFor="" className='block uppercase text-[13px] font-bold pb-[10px]'>Country*</label>
                                        <select name="" id="" className='w-full bg-[#FCFBF5] p-[14px] border border-[#ccc] rounded-[5px]'>
                                            <option value="1">+91( India )</option>
                                            <option value="2" selected>+1( United States )</option>
                                            <option value="3">+1( Canada )</option>
                                            <option value="4">+54( Argentina )</option>
                                            <option value="5">+374( Armenia )</option>
                                            <option value="6">+297( Aruba )</option>
                                            <option value="7">+61( Australia )</option>
                                            <option value="8">+43( Austria )</option>
                                            <option value="9">+994( Azerbaijan )</option>
                                            <option value="10">+1-242( Bahamas )</option>
                                            <option value="11">+375( Belarus )</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex justify-between flex-wrap py-[15px] w-[80%]">

                                    <div className="w-[50%] px-[20px] block">
                                        <label htmlFor="" className='block uppercase text-[13px] font-bold pb-[10px]'>Contact Number</label>
                                        <input type="email" className='block w-full outline-none text-[14px] bg-[#FCFBF5] p-[15px] border border-[#ccc] rounded-[5px]' placeholder='Enter Email id' />
                                    </div>
                                    <div className="w-[50%] px-[20px] mt-[30px] block">
                                        {/* <label htmlFor="" className='block uppercase text-[13px] font-bold pb-[10px]'>Type Captcha Text</label> */}
                                        <input type="email" className='block w-full outline-none text-[14px] bg-[#FCFBF5] p-[15px] border border-[#ccc] rounded-[5px]' placeholder='Type Captcha Text' />
                                    </div>
                                </div>
                                <div className="flex justify-center align-middle mt-[20px] text-center">
                                    <Link className='bg-[#d4b952] hover:bg-black transition-all duration-300 ease-in-out text-white text-[15px] rounded-[3px] p-[12px] w-[180px] cursor-pointer border-none'>Submit</Link>                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default WeddingGuide