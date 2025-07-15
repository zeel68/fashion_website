import React from 'react'
import { Link } from 'react-router-dom'

const Affiliate = () => {
    return (
        <>
            <div className="block">
                <div className="max-w-[1440px] mx-auto  px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-[700px] w-full py-[2rem]">

                        <form action="">
                            <div className="pt-[1.5rem]">
                                <div className="pb-[2rem]">
                                    <h4 className='font-bold text-[1.5rem]'>
                                        What is Dhaneri’s affiliate program?
                                    </h4>
                                    <p className='pt-[1rem] text-[15px] leading-[1.6]'>
                                        Our Affiliate program gives you an opportunity to refer Dhaneri products to your friends / family & earn huge commission and lucrative offers.
                                    </p>
                                </div>
                                <div className="pb-[2rem]">
                                    <h4 className='font-bold text-[1.5rem]'>How do I register to become an affiliate?</h4>
                                    <p className='pt-[1rem] text-[15px] leading-[1.6]'>
                                        Register with us via filling below form.
                                    </p>
                                    <p className='pt-[1rem] text-[15px] leading-[1.6]'>
                                        Our team will get in touch with you within 24 hours, via email / whatsapp to verify your social handles profile and assist you set up your affiliate page to get started.
                                    </p>
                                </div>
                                <div className="pb-[2rem]">
                                    <h4 className='font-bold text-[1.5rem]'>
                                        How do I receive orders, and track sales?
                                    </h4>
                                    <p className='pt-[1rem] text-[15px] leading-[1.6]'>
                                        Once you register, you will get a personalized website link which you can share with potential customers. You will also be provided with your own dashboard (under ‘My Account’) where you can track your sales, commission, promotions and more.
                                    </p>
                                </div>
                                <div className="pb-[2rem]">
                                    <h4 className='font-bold text-[1.5rem]'>How much can I earn?</h4>
                                    <p className='pt-[1rem] text-[15px] leading-[1.6]'>
                                        For every sale made using your code or from your webshop, you will earn a commission of 15%. You can earn above INR 1 Lakh or $1250 per month.                                    </p>
                                </div>
                                <div className="pb-[2rem]">
                                    <h4 className='font-bold text-[1.5rem]'>How do I promote my website?</h4>
                                    <p className='pt-[1rem] text-[15px] leading-[1.6]'>

                                        your preferred social media platform. Your followers will be directed to your dedicated site, where they
                                        can place orders.

                                    </p>
                                </div>
                            </div>
                        </form>

                        <div className="block">
                            <div className="py-[10px] relative">
                                <input type="text" placeholder='Enter Name' className='w-full border border-[#e5e5e5] p-[13px] text-[12px] box-border' required />
                            </div>
                            <div className="py-[10px] relative">
                                <input type="email" placeholder='Email' className='w-full border border-[#e5e5e5] p-[13px] text-[12px] box-border' required />
                            </div>

                            <div className="py-[10px] relative">
                                <div className="flex flex-wrap justify-between">
                                    <select name="" id="" className='w-[48%] rounded-[5px] bg-[#e5e5e5] p-[13px] border border-[#ccc] rounded-[5px]]'>
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
                                    <div className="w-[50%]">
                                        <input type="text" placeholder='Mobile' className='w-full border outline-none border-[#e5e5e5] p-[13px] text-[12px] box-border' required />
                                    </div>
                                </div>
                            </div>

                            <div className="my-[10px]">
                                <div className="flex justify-between flex-col sm:flex-row items-center gap-[10px] w-full">
                                    <img src="assets/img/w2.png" alt="" className="w-[165px] h-[50px] sm:h-[60px] object-contain" />
                                    <input type="text" placeholder="Type Captcha Text" className="w-full sm:w-full border border-[#e5e5e5] p-[15px] text-[12px] box-border rounded-[4px] outline-none" />
                                </div>
                            </div>

                            <div className="py-[10px] relative">
                                <label htmlFor="" className='text-[14px]'>
                                    <input type="checkbox" className='mr-[10px]' name="" id="" />
                                    By Signing up, I agree to houseofDhaneri.com
                                    <Link className="ml-[10px] text-[#d4b952] underline">Terms & Condition</Link>
                                </label>
                            </div>

                            <input type="submit" value="Submit" className='bg-[#d4b952] hover:bg-black transition-all duration-300 ease-in-out text-white p-[15px] rounded-[5px] border-none cursor-pointer w-full text-[17px] my-[2rem] text-center' />
                            <input type="submit" value="REGISTER NOW TO START SELLING" className='bg-[#d4b952] py-[15px] px-[2rem] rounded-[5px] text-white border-none cursor-pointer text-[17px] mt-[2rem] block text-center fixed bottom-[2rem] left-1/2 transform -translate-x-1/2 z-[9]'
                            />


                            <div className="pb-[2rem]">
                                <h4 className='font-bold text-[1.5rem]'>
                                    About Dhaneri
                                </h4>
                                <p className='pt-[1rem] text-[15px] leading-[1.6]'>


                                    Since its inception in 2016, Dhaneri has emerged as one of India’s leading fashion brands for modern
                                    festive wear. Driven by our philosophy of reinventing Indian fashion, our styles are loved by women
                                    across 25 countries.  We have a very strong digital brand presence, with a 1 million + followers on social
                                    media. Our extensive ecommerce business (also available on Mytnra, Ajio and Amazon) is partnered by
                                    an equally strong retail presence with over 500+ stores.

                                </p>
                                <p className='pt-[1rem] text-[15px] leading-[1.6]'>

                                    We are now looking for driven and enterprising affiliate partners to share this amazing success story.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Affiliate