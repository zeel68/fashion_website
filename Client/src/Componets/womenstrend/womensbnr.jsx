import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Aos from 'aos';


const Womensbnr = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <>
            <div className='main py-[15px]' data-aos="fade-up">
                <div className="max-w-screen-xxl mx-auto px-[5px]">
                    <div className="inner-main">
                        <div className="flex justify-center p-[25px]">
                            <h3 className='text-[25px] font-bold'>
                                Trending Right Now
                            </h3>
                        </div>

                        <div className="bnr">
                            <Link to="/Jewellery">
                                <img className='w-full' src="./assets/img/womenbnr.jpg" alt="bnr" />
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Womensbnr