import React from 'react'

const Wholesale = () => {
    return (
        <>
            <div className="block">
                <div className="max-w-[1440px] mx-auto  px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-[700px] w-full text-center">

                        <img src="assets/img/w1.png" alt="" />
                        {/* box */}
                        <form action="">
                            <div className="bg-[#fdfdfd] border border-[#e5e5e5] my-[10px] py-[20px] px-[30px] box-border">
                                <div className="text-center">
                                    <h4 className='text-[20px] font-bold text-[#D3b951]'>Interested in selling Indya clothes & accessories?</h4>
                                    <h5 className='text-[15px] font-bold mt-[20px] leading-[22px]'>Place a bulk order request with us.</h5>
                                    <h6 className='text-[12px] font-bold leading-[20px] mt-[10px]'>Fill out this easy application and our team will get in touch with you within the next 24-48 hours.</h6>
                                </div>
                                <div className="mt-[20px]">
                                    <div className="mt-[10px]">
                                        <input type="text" placeholder='Name / Company Name' className='w-full border border-[#e5e5e5] p-[15px] text-[12px] box-border outline-none' />
                                    </div>
                                </div>
                                <div className="mt-[20px]">
                                    <div className="mt-[10px]">
                                        <input type="text" placeholder='Email Address' className='w-full border border-[#e5e5e5] p-[15px] text-[12px] box-border outline-none' />
                                    </div>
                                </div>
                                <div className="mt-[20px]">
                                    <div className="mt-[10px]">
                                        <input type="text" placeholder='Contact Number' className='w-full border border-[#e5e5e5] p-[15px] text-[12px] box-border outline-none' />
                                    </div>
                                </div>
                                <div className="mt-[20px]">
                                    <div className="mt-[10px]">
                                        <textarea name="" id="" cols={20} rows={2} placeholder='Delivery Address' className='w-full border border-[#e5e5e5] p-[15px] text-[12px] box-border outline-none'></textarea>
                                    </div>
                                </div>
                                <div className="mt-[20px]">
                                    <div className="mt-[10px]">
                                        <input type="text" placeholder='No. of pieces you are interested in buying' className='w-full border border-[#e5e5e5] p-[15px] text-[12px] box-border outline-none' />
                                    </div>
                                </div>
                                <div className="mt-[20px]">
                                    <div className="mt-[10px]">
                                        <textarea name="" id="" cols={20} rows={2} placeholder='Additional comments / requests / styles you are interested in' className='w-full border border-[#e5e5e5] p-[15px] text-[12px] box-border outline-none'></textarea>

                                    </div>
                                </div>
                                <div className="mt-[20px] leading-[24px] flex items-center">
                                    <div className="flex flex-col sm:flex-row items-center gap-[10px] w-full">
                                        <input type="text" placeholder="Type Captcha Text" className="w-full sm:w-1/2 border border-[#e5e5e5] p-[15px] text-[12px] box-border rounded-[4px] outline-none" />
                                        <img src="assets/img/w2.png" alt="" className="w-auto h-[50px] sm:h-[60px] object-contain" />
                                    </div>
                                </div>

                                <input type="submit" value="Submit" className='bg-[#D3b951] mt-[20px] text-[14px] border-none cursor-pointer w-[200px] text-white p-[15px] uppercase outline-none' />
                            </div>
                        </form>


                    </div>


                </div>
            </div>
        </>
    )
}

export default Wholesale